// ChatbotPage.js

class Chatbot {
    constructor(page) {
      this.page = page;
    }
  
    async openChatbot() {
      await this.page.goto('https://fi.sandbox.sapia.ai/ap-southeast-2/cohorts/623a9ab72ad0b2561fecc7ae'); // Replace with your chatbot URL
      
    }
  
    async sendMessage1() {
      await page.getByLabel('rdw-editor').fill('testing');
		  await page.locator("//*[name()='path' and contains(@d,'M931.4 498')]").click();
    }
    async sendMessage2() {
      await page.getByPlaceholder('Enter your response ...').type("teste1@gmail.com")
		  await page.locator("//*[name()='path' and contains(@d,'M931.4 498')]").click();
    }
    async sendMessage3() {
      await page.locator("//input[@type = 'text']").type("1300 975 707");
		await page.locator("//*[name()='path' and contains(@d,'M931.4 498')]").click();
    }
    async sendMessage4() {
      await page.locator("//div[@class='text-input-editor rdw-editor-main']").type("India");
		  await page.locator("(//div[@class='option-item'])[1]").click();
		  await page.locator("//div[@class='option-item' and @id = '1']").click();
    }
    async sendMessage5() {
      await page.locator("//div[@class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr']").type("Enter Text for test")
      await page.locator("//div[@class='ph-send-button false']").click();
    }
    
  
    
  }
  
  module.exports = Chatbot;
  