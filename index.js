const puppeteer = require('puppeteer');

async function run() {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();
  await page.goto('https://github.com');
  await page.screenshot({ path: 'screenshots/github.png' });

  await browser.close();
}

run();

// (async () => {
//   const browser = await puppeteer.launch({
//     headless: false
//   });
//   const page = await browser.newPage();
//   await page.goto('https://github.com');
//   await page.screenshot({ path: 'screenshots/github.png' });

//   await browser.close();
// })();