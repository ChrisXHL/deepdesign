const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const OUT = path.resolve(__dirname);

const SITES = [
  {
    name: 'codex',
    url: 'https://chatgpt.com/zh-Hans-CN/codex/',
    file: 'codex-source.html',
  },
  {
    name: 'apple',
    url: 'https://www.apple.com.cn/?afid=p240%7Cgo~cmp-13640248011~adg-129735188331~ad-572632741590_kwd-10778630~dev-c~ext-~prd-~mca-~nt-search&cid=aos-cn-kwgo-txt-brand---',
    file: 'apple-source.html',
  },
];

function injectBase(html, targetUrl) {
  const base = `<base href="${targetUrl}">`;
  if (/<head[^>]*>/i.test(html)) return html.replace(/<head[^>]*>/i, m => m + base);
  if (/<html[^>]*>/i.test(html)) return html.replace(/<html[^>]*>/i, m => m + base);
  return base + html;
}

(async () => {
  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1280,900'],
  });

  for (const site of SITES) {
    console.log(`Rendering ${site.name}...`);
    try {
      const page = await browser.newPage();
      await page.setViewport({ width: 1280, height: 900 });
      await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36');
      await page.setExtraHTTPHeaders({ 'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8' });

      await page.goto(site.url, { waitUntil: 'networkidle2', timeout: 45000 });
      await new Promise(r => setTimeout(r, 3000));

      // Inline all CSS: fetch each stylesheet and replace <link> with <style>
      console.log(`  Inlining CSS for ${site.name}...`);
      await page.evaluate(async () => {
        const links = Array.from(document.querySelectorAll('link[rel="stylesheet"]'));
        for (const link of links) {
          try {
            const href = link.href;
            const res = await fetch(href);
            const css = await res.text();
            const style = document.createElement('style');
            style.textContent = css;
            link.replaceWith(style);
          } catch (e) {
            console.warn('Failed to inline:', link.href, e.message);
          }
        }
        // Also inline @import styles
        const styles = Array.from(document.querySelectorAll('style'));
        for (const style of styles) {
          const importRegex = /@import\s+(?:url\()?["']?([^"')]+)["']?\)?;/g;
          let match;
          const imports = [];
          while ((match = importRegex.exec(style.textContent)) !== null) {
            imports.push(match);
          }
          for (const imp of imports) {
            try {
              const importUrl = new URL(imp[1], location.href).href;
              const res = await fetch(importUrl);
              const css = await res.text();
              style.textContent = style.textContent.replace(imp[0], css);
            } catch (e) {
              // skip
            }
          }
        }
      });

      // Strip scripts (we want a static visual snapshot, not an interactive SPA)
      await page.evaluate(() => {
        document.querySelectorAll('script').forEach(s => s.remove());
        // Remove inline event handlers
        document.querySelectorAll('*').forEach(el => {
          for (const attr of el.attributes) {
            if (attr.name.startsWith('on')) {
              el.removeAttribute(attr.name);
            }
          }
        });
      });

      let html = await page.content();

      // Strip CSP/X-Frame meta tags
      html = html
        .replace(/<meta[^>]+http-equiv=["']?content-security-policy["']?[^>]*>/gi, '')
        .replace(/<meta[^>]+http-equiv=["']?x-frame-options["']?[^>]*>/gi, '');

      html = injectBase(html, site.url);

      const outPath = path.join(OUT, site.file);
      fs.writeFileSync(outPath, html, 'utf-8');
      console.log(`  Saved: ${outPath} (${(html.length / 1024).toFixed(1)} KB)`);
      await page.close();
    } catch (err) {
      console.error(`  Error rendering ${site.name}:`, err.message);
    }
  }

  await browser.close();
  console.log('Done.');
})();
