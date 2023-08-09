const { test } = require('@playwright/test');
const {ChatBot} = require(chatbotPage1)

test('Test a failed path when typing less then 50 words', async ({ browser }) => {
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
  await chatbotPage.sendMessage5();
  expect (page.locator("(//button[@type='button'])[1]")).toContainText('EDIT');
  

  
  
  

  // Close the browser
  await browser.close();
})();
