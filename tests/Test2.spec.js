const { test, expect } = require('@playwright/test');


test('Test a failed path when typing less then 50 words', async ({ browser }) => {
test.setTimeout(350000);
const context = await browser.newContext();
const page = await context.newPage();

await context.clearCookies();
await page.goto('https://fi.sandbox.sapia.ai/ap-southeast-2/cohorts/623a9ab72ad0b2561fecc7ae');
await page.getByLabel('rdw-editor').fill('testerbg');
await page.locator("//*[name()='path' and contains(@d,'M931.4 498')]").click();
await page.waitForTimeout(10000)
await page.getByPlaceholder('Enter your response ...').type("example377@gmail.com")
await page.locator("//*[name()='path' and contains(@d,'M931.4 498')]").click();
await page.waitForTimeout(10000)
await page.locator("//input[@type = 'text']").type("7 7032 2134");
await page.locator("//*[name()='path' and contains(@d,'M931.4 498')]").click();
await page.waitForTimeout(10000)
await page.locator("//div[@class='text-input-editor rdw-editor-main']").type("India");
await page.locator("(//div[@class='option-item'])[1]").click();
await page.locator("//div[@class='option-item' and @id = '1']").click();
await page.waitForTimeout(20000)
await page.locator("//div[@class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr']").type("Enter Text for test")
await page.locator("//div[@class='ph-send-button false']").click();
expect (page.locator("(//button[@type='button'])[1]")).toContainText('EDIT');
});
  

  
  
  