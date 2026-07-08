const puppeteer = require('puppeteer-core');
const path = require('path');
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

(async () => {
  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1280,900'],
  });

  async function screenshot(file, out, height) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 900, deviceScaleFactor: 1 });
    await page.goto('file://' + file, { waitUntil: 'networkidle0', timeout: 60000 });
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({
      path: out,
      fullPage: false,
      clip: { x: 0, y: 0, width: 1280, height },
    });
    console.log('saved', out);
    await page.close();
  }

  const base = path.join(__dirname, '..');
  await screenshot(
    path.join(base, 'outputs', 'codex-source.html'),
    path.join(base, 'outputs', 'preview-codex.png'),
    900
  );
  await screenshot(
    path.join(base, 'outputs', 'apple-source.html'),
    path.join(base, 'outputs', 'preview-apple.png'),
    900
  );

  await browser.close();
})();
