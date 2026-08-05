import { Page, Locator, expect } from '@playwright/test';

export class PiggyPage {
  readonly page: Page;
  readonly name: Locator;
  readonly target: Locator;
  readonly currency: Locator;
  readonly accounts: Locator;
  readonly submit: Locator;
  readonly inputsum: Locator;
  readonly buttonsubmit: Locator;
  readonly savesum: Locator;
  readonly submit2: Locator;
  readonly targetDate: Locator;
  readonly notes: Locator;
  readonly file: Locator;
  readonly inputFile: Locator;
  readonly succes: Locator;


  constructor(page: Page) {
    this.page = page;
    this.name = page.locator('#ffInput_name');
    this.target = page.locator('#ffInput_target_amount');
    this.currency = page.locator('#ffInput_transaction_currency_id');
    this.accounts = page.locator('#ffInput_accounts');
    this.submit = page.locator('.btn-success')
    this.inputsum = page.locator('input[type=number]');
    this.buttonsubmit = page.locator('button[type=submit]');
    this.savesum = page.locator('span[title="Saved so far"]');
    this.submit2 = page.locator('button[type=submit]');
    this.targetDate = page.locator('#ffInput_target_date');
    this.notes = page.locator('#ffInput_notes');
    this.file = page.locator('#ffInput_attachments');
    this.inputFile = page.locator('#ffInput_attachments');
    this.succes = page.locator('alert-success');

  }

  async goto() {
    await this.page.goto('/piggy-banks/create');
  }

  async list() {
    await this.page.goto('/piggy-banks');
  }

  async create(name: string, target: string, option: string, account: string) {
    await this.name.fill(name);
    await this.target.fill(target)
    await this.currency.selectOption(option);
    await this.accounts.selectOption(account);
    await this.submit.click();
  }

async clickButtonInRow(text: string, sum: string) {
  await this.page
    .locator('tr', { hasText: text })
    .locator('.addMoney')
    .click();
 await this.inputsum.fill(sum);

}

async buttonLocator() {
    await this.page
     .locator('.modal-footer')
     .locator('button[type=submit]')
     .click();
}


asertionPiggy(name: string) {

  return this.page.locator(`tr[data-name="${name}"]`);

}

async clickPiggy(name: string) {

    await this.page
     this.page.locator('a', { hasText: name })
     .click();

}

  async createOptional(name: string, target: string, option: string, account: string, targetdate: string, note: string) {
    await this.name.fill(name);
    await this.target.fill(target);
    await this.currency.selectOption(option);
    await this.accounts.selectOption(account);

    await this.targetDate.fill(targetdate);
    await this.notes.fill(note);
    await this.inputFile.setInputFiles('test-data/image.png');
    await this.submit.click();
  }}