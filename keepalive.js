const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  
  await page.goto(process.env.APP_URL);
  await page.waitForSelector('input[type="password"]', { timeout: 10000 });
  
  // Tulostetaan kaikki napit debuggausta varten
  const buttons = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('button, input[type="button"], input[type="submit"]'))
      .map(b => ({ tag: b.tagName, type: b.type, text: b.textContent.trim(), id: b.id, class: b.className }));
  });
  console.log('Löydetyt napit:', JSON.stringify(buttons, null, 2));
  
  await browser.close();
})();
