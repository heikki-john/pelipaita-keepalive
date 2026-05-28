const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  
  await page.goto(process.env.APP_URL);
  await page.waitForSelector('input[type="password"]', { timeout: 10000 });
  
  await page.type('input[type="password"]', process.env.APP_PASSWORD);
  await page.click('button[type="submit"]');
  
  await page.waitForTimeout(3000);
  console.log('Sivu ladattu ja DB-kutsut tehty ✓');
  
  await browser.close();
})();
