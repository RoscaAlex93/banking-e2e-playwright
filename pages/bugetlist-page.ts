import { Page, Locator } from '@playwright/test';

export class BugetlistPage {
  readonly page: Page;


  constructor(page: Page) {
    this.page = page;


    
  }

  async goto() {
    await this.page.goto('budgets');
  }

async checkBuget(name: string) {


}
}