import { Page, Locator } from '@playwright/test';

export class WithdrawalPage {
  readonly page: Page;
  readonly description: Locator;
  readonly source: Locator;
  readonly destination: Locator;
  readonly amount: Locator;
  readonly buget: Locator;
  readonly submit: Locator;
  readonly account: Locator;
readonly successMessage: Locator;

  constructor(page: Page) {
    this.page = page;

    this.description = page.locator('input[name="description[]"]');
    this.source = page.locator('input[name="source[]"]');
    this.destination = page.locator('input[name="destination[]"]');
    this.amount = page.locator('input[name="amount[]"]');
    this.buget = page.locator('select[name="budget[]"]');
    this.submit = page.locator('.btn-success');
    this.account = page.getByRole('button', { name: /^Cont Unu\b/ });
    this.successMessage = page.locator('.alert-success');


  

  }

  async goto() {
    await this.page.goto('/transactions/create/withdrawal');
  }

  async list() {
    await this.page.goto('transactions/withdrawal');
  }

  async gotocreateTransfer() {
    await this.page.goto('/transactions/create/transfer')
  }



  async create(name: string, ammount: string, source: string, buget: string) {
    await this.description.fill(name);
    await this.source.fill(source);
    await this.account.click();
   await this.amount.fill(ammount);
   await this.buget.selectOption({ label: buget });
   await this.submit.click();
  }

  async createB(name: string, ammount: string, source: string){
    await this.description.fill(name);
    await this.source.fill(source);
    await this.account.click();
    await this.amount.fill(ammount);
    await this.submit.click();

  }



  async createC(name: string, ammount: string, source: string, destination: string) {
    await this.description.fill(name);
    await this.source.fill(source);
    await this.page.getByText(source).click();
    await this.destination.fill(destination);
    await this.page.getByText(destination).click();
   await this.amount.fill(ammount);
   await this.submit.click();
  }
}