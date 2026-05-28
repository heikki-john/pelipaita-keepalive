const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  
  await page.goto(process.env.APP_URL);
  await page.waitForSelector('input[type="password"]', { timeout: 10000 });
  
  await page.type('input[type="password"]', process.env.APP_PASSWORD);
  await page.click('#loginBtn');
  
  // Odotetaan että data latautuu
  await new Promise(r => setTimeout(r, 5000));
  
  console.log('Kirjauduttu sisään ja DB-kutsut tehty ✓');
  
  await browser.close();
})();
