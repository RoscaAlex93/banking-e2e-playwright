import { Page, Locator, expect } from '@playwright/test';

export class ReportsPage {
readonly page: Page;
readonly raportType: Locator;
readonly accountsButton: Locator;
readonly dataRange: Locator;
readonly submitButton: Locator;
readonly inputName: Locator;
readonly assertionLocator: Locator;


  constructor(page: Page) {
    this.page = page;
    this.raportType = page.locator('#inputReportType');
    this.accountsButton = page.locator('button[data-toggle="dropdown"]'); 
    this.dataRange = page.locator('#inputDateRange');
    this.submitButton = page.locator('button.btn-default[type="submit"]');
    this.inputName = page.locator('.multiselect-search');
    this.assertionLocator = page.locator('.hide-description') 
  }

  async goto() {
    await this.page.goto('/reports');
  }

  async filltheForm(raportOption: string, account: string, lastWeek: string, Today: string) {
    await this.raportType.selectOption(raportOption);
    await this.accountsButton.click();
    await this.inputName.fill(account)
     await this.page
    .locator('label', { hasText: account })
    .check();
    await this.dataRange.fill(`${lastWeek} - ${Today}`);
    await this.submitButton.click();
  }

async assertionReports(name: string) {
  await expect(this.assertionLocator.getByText(name)).toBeVisible();
}
  
}