const puppeteer = require('puppeteer-core');
const path = require('path');

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const BASE = 'http://localhost:8765';

(async () => {
  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1280,900']
  });

  async function shot(url, file, wait) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 900, deviceScaleFactor: 1 });
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
    if (wait) await new Promise(r => setTimeout(r, wait));
    await page.screenshot({ path: path.join(__dirname, file), fullPage: false });
    console.log(file, 'saved');
    await page.close();
  }

  // Gallery
  await shot(BASE + '/', 'gallery-light.png', 3000);

  // Dark mode gallery
  const darkPage = await browser.newPage();
  await darkPage.setViewport({ width: 1280, height: 900, deviceScaleFactor: 1 });
  await darkPage.emulateMediaFeatures([{ name: 'prefers-color-scheme', value: 'dark' }]);
  await darkPage.goto(BASE + '/', { waitUntil: 'domcontentloaded', timeout: 60000 });
  await new Promise(r => setTimeout(r, 3000));
  await darkPage.screenshot({ path: path.join(__dirname, 'gallery-dark.png'), fullPage: false });
  console.log('gallery-dark.png saved');
  await darkPage.close();

  // Codex source tab (now image + link, no iframe load)
  await shot(BASE + '/#/codex/source', 'codex-source.png', 2000);

  // Apple source tab
  await shot(BASE + '/#/apple/source', 'apple-source.png', 2000);

  await browser.close();
  console.log('Done');
})();
