import { Page, Locator, expect } from '@playwright/test';


export class LiabiliteiesPage {
  readonly page: Page;
  readonly name: Locator;
  readonly currency: Locator;
  readonly ownAmmount: Locator;
  readonly liabilityDirection: Locator;
  readonly startDate: Locator;
  readonly interesValue: Locator;
  readonly interesPeriod: Locator;
  readonly submitButton: Locator;
  readonly asertionLocator: Locator;



  constructor(page: Page) {
    this.page = page;
    this.name = page.locator('#ffInput_name');
    this.currency = page.locator('#ffInput_currency_id');
    this.ownAmmount = page.locator('#ffInput_opening_balance');
    this.liabilityDirection = page.locator('#ffInput_liability_direction');
    this.startDate = page.locator('#ffInput_opening_balance_date');
    this.interesValue = page.locator('#ffInput_interest');
    this.interesPeriod = page.locator('#ffInput_interest_period');
    this.submitButton = page.locator('.btn-success');
    this.asertionLocator = page.locator('.sortable-object');
    


  }

  async gotoCreate() {
    await this.page.goto('/accounts/create/liabilities');
  }
    async gotolist() {
    await this.page.goto('/accounts/liabilities');
  }

  async fillTheForm(name: string, currencyValue: string, ownammountValue: string, debit: string, lastMounth: string, interesvalue: string, interesperiod: string,) {
   await this.name.fill(name)
   await this.currency.selectOption(currencyValue);
   await this.ownAmmount.fill(ownammountValue);
   await this.liabilityDirection.selectOption(debit);
   await this.startDate.fill(lastMounth);
   await this.interesValue.fill(interesvalue);
   await this.interesPeriod.selectOption(interesperiod);
   await this.submitButton.click();

  }


}