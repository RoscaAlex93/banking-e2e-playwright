import { Page, Locator } from '@playwright/test';

export class BudgetlistPage {
  readonly page: Page;


  constructor(page: Page) {
    this.page = page;


    
  }

  async goto() {
    await this.page.goto('budgets');
  }

async checkBudget(name: string) {


}
}