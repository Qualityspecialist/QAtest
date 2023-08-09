const { test, expect } = require('@playwright/test');


test('Test a happy path to complete an interview', async ({ browser }) => {
test.setTimeout(300000);
const context = await browser.newContext();
const page = await context.newPage();

await context.clearCookies();
await page.goto('https://fi.sandbox.sapia.ai/ap-southeast-2/cohorts/623a9ab72ad0b2561fecc7ae');
await page.getByLabel('rdw-editor').fill('testing');
await page.locator("//*[name()='path' and contains(@d,'M931.4 498')]").click();
await page.waitForTimeout(10000)
await page.getByPlaceholder('Enter your response ...').type("example1@gmail.com")
await page.locator("//*[name()='path' and contains(@d,'M931.4 498')]").click();
await page.waitForTimeout(10000)
await page.locator("//input[@type = 'text']").type("7 7010 3877");
await page.locator("//*[name()='path' and contains(@d,'M931.4 498')]").click();
await page.waitForTimeout(10000)
await page.locator("//div[@class='text-input-editor rdw-editor-main']").type("India");
await page.locator("(//div[@class='option-item'])[1]").click();
await page.locator("//div[@class='option-item' and @id = '1']").click();
await page.waitForTimeout(10000)
expect(page.locator("//p[contains(text(),'Thanks')]")).toBeTruthy();
});
  

  
  
  