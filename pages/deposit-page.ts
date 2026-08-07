import { Page, Locator, expect } from '@playwright/test';

export class DepositPage {
  readonly page: Page;
  readonly description: Locator;
  readonly source: Locator;
  readonly destination: Locator;
  readonly amount: Locator;
  readonly budget: Locator;
  readonly submit: Locator;
  readonly account: Locator;
readonly successMessage: Locator;

  constructor(page: Page) {
this.page = page;

    this.description = page.locator('input[name="description[]"]');
    this.source = page.locator('input[name="source[]"]');
    this.destination = page.locator('input[name="destination[]"]');
    this.amount = page.locator('input[name="amount[]"]');
    this.budget = page.locator('select[name="budget[]"]');
    this.submit = page.locator('.btn-success');
    this.account = page.getByRole('button', { name: /^Cont Unu\b/ });
    this.successMessage = page.locator('.alert-success');

  }

  async goto() {
    await this.page.goto('/transactions/create/deposit');
  }

  async createDeposit(name: string, ammount: string, source: string, destination: string) {
    await this.description.fill(name);
    await this.source.fill(source);
    await this.page.getByText(source).click();
    await this.destination.fill(destination);
    await this.page.getByText(destination).click();
   await this.amount.fill(ammount);
   await this.submit.click();
  }

  
}