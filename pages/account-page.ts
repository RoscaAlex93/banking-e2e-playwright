import { Page, Locator } from '@playwright/test';


export class AccountPage {
  readonly page: Page;
  readonly name: Locator;
  readonly currency: Locator;
  readonly balance: Locator;
  readonly balanceDate: Locator;
  readonly submit: Locator;


  constructor(page: Page) {
    this.page = page;
    this.name = page.locator('#ffInput_name');
    this.currency = page.locator('#ffInput_currency_id');
    this.balance = page.locator('#ffInput_opening_balance');
    this.balanceDate = page.locator('#ffInput_opening_balance_date');
    this.submit = page.locator('.btn-success');

  }

  async goto() {
    await this.page.goto('/accounts/create/asset');
  }

  async create(name: string, currencyValue: string, balanceValue: string, TodayDate: string ) {
    await this.name.fill(name)
    await this.currency.selectOption(currencyValue)
    await this.balance.fill(balanceValue)
    await this.balanceDate.fill(TodayDate)
    await this.submit.click();


  }
}