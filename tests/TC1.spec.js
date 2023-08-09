const { test } = require('@playwright/test');
const {ChatBot} = require(chatbotPage1)

test('Test a happy path to complete an interview', async ({ browser }) => {
  test.setTimeout(300000);
  const context = await browser.newContext();
  const page = await context.newPage();
  const chatbotPage = new ChatbotPage(page);

  // Open the chatbot
  await chatbotPage.openChatbot();
  await context.clearCookies()

  // Send messages 
  await chatbotPage.sendMessage1();
  await page.waitForTimeout(10000);
  await chatbotPage.sendMessage2();
  await page.waitForTimeout(10000);
  await chatbotPage.sendMessage3();
  await page.waitForTimeout(10000);
  await chatbotPage.sendMessage4();
  await page.waitForTimeout(10000);
  expect(page.locator("//p[contains(text(),'Thanks')]")).toBeTruthy();
  

  
  
  

  // Close the browser
  await browser.close();
})();
