import { Page, Locator } from '@playwright/test';

export class BugetPage {
  readonly page: Page;
  readonly name: Locator;
  readonly submitButton: Locator;
  readonly successMessage: Locator;
  readonly bugetType: Locator;
  readonly buggetAmmount: Locator;
  readonly bugetAttachments: Locator

  constructor(page: Page) {
    this.page = page;

    this.name = page.locator('#ffInput_name');
    this.submitButton = page.locator('.btn-success');
    this.successMessage = page.locator('.alert-success');
    this.bugetType = page.locator('#ffInput_auto_budget_type');
    this.buggetAmmount = page.locator('#ffInput_auto_budget_amount');
    this.bugetAttachments = page.locator('#ffInput_attachments');

    
  }

  async goto() {
    await this.page.goto('/budgets/create');
  }

  async create(name: string) {
    await this.name.fill(name);
    await this.submitButton.click();
  }


  async createBugetType(name: string, autoBuget: string, ammount: string) {
  await this.name.fill(name)
  await this.bugetType.selectOption(autoBuget)
  await this.buggetAmmount.fill(ammount)
  await this.submitButton.click();
  }

 async creatAattachments(name: string, autoBuget: string, ammount:string) {
  await this.name.fill(name);
  await this.bugetType.selectOption(autoBuget)
  await this.buggetAmmount.fill(ammount);
  await this.bugetAttachments.setInputFiles('test-data/image.png');
  await this.submitButton.click();

 }
}