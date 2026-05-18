import { Page, Locator } from '@playwright/test';

export class SubscriptionPage {
  readonly page: Page;
  readonly name: Locator;
  readonly currency: Locator;
  readonly sumMin: Locator;
  readonly sumMax: Locator;
  readonly submit: Locator;
  readonly action: Locator;
  readonly actionValue: Locator;
  readonly endDate: Locator;
  readonly extensionDate: Locator;
  readonly notes: Locator;
  readonly attachment: Locator;


  constructor(page: Page) {
    this.page = page;

    this.name = page.locator('#ffInput_name');
    this.currency = page.locator('#ffInput_transaction_currency_id');
    this.sumMin = page.locator('#ffInput_amount_min');
    this.sumMax = page.locator('#ffInput_amount_max');
    this.submit = page.locator('.btn-success');
    this.action = page.locator('select[name="actions[1][type]"]');
    this.actionValue = page.locator('input[name="actions[1][value]"]');
    this.endDate = page.locator('#ffInput_bill_end_date');
    this.extensionDate = page.locator('#ffInput_extension_date');
    this.notes = page.locator('#ffInput_notes');
    this.attachment = page.locator('#ffInput_attachments');
  }

  async goto() {
    await this.page.goto('subscriptions/create');
  }

  async createSubscription(number: string, name: string, option: string, tag: string, tagName: string) {
      await this.name.fill(name);
      await this.currency.selectOption(option);
      await this.sumMin.fill(number);
      await this.sumMax.fill(number);
      await this.submit.click();
      await this.action.selectOption(tag);
      await this.actionValue.fill(tagName);
      await this.submit.click();

  }


    async createSubscriptionA(name: string, currencyOption: string, sum: string,) {
      await this.name.fill(name);
      await this.currency.selectOption(currencyOption);
      await this.sumMin.fill(sum);
      await this.sumMax.fill(sum);
      await this.submit.click();
  }

    async createSubscriptionOptional(name: string, currencyOption: string, sum: string, endDate: string, extensionDate: string, notes:string){
      await this.name.fill(name);
      await this.currency.selectOption(currencyOption);
      await this.sumMin.fill(sum);
      await this.sumMax.fill(sum);
      await this.endDate.fill(endDate);
      await this.extensionDate.fill(extensionDate);
      await this.notes.fill(notes);
      await this.attachment.setInputFiles('test-data/image.png');
      await this.submit.click();
    }
}