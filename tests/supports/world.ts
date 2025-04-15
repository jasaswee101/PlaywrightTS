
import { setWorldConstructor, World } from "@cucumber/cucumber";
import { Browser, Page, chromium } from "@playwright/test";
 
class CustomWorld extends World {
  page!: Page;
  browser!: Browser;
  boardId?: string;
 
  async init() {
    this.browser = await chromium.launch({ headless: false });
    this.page = await this.browser.newPage();
  }
 
  async close() {
    await this.page.close();
    await this.browser.close();
  }
}
 
setWorldConstructor(CustomWorld);