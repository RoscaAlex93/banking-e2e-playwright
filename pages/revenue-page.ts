import { Page, Locator, expect } from '@playwright/test';

export class RevenuePage {
readonly page: Page;
readonly inputName: Locator;
readonly submitButton: Locator

  constructor(page: Page) {
    this.page = page;
    this.inputName = page.locator('#ffInput_name');
    this.submitButton = page.locator('.btn-success');

  }

  async goto() {
    await this.page.goto('/accounts/create/revenue');
  }

  async filltheForm(name: string) {
     await this.inputName.fill(name);
     await this.submitButton.click();
  }

  
}