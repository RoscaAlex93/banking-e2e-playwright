import { Page, Locator } from '@playwright/test';


export class LoginPage {
  readonly page: Page;
  readonly email: Locator;
  readonly password: Locator;
  readonly submit: Locator;


  constructor(page: Page) {
    this.page = page;
    this.email = page.locator('input[type=email]');
    this.password = page.locator('input[type=password]');
    this.submit = page.locator('button[type=submit]');

  }

  async goto() {
    await this.page.goto('/login');
  }

  async login(email: string, password: string) {
   await this.email.fill(email);
   await this.password.fill(password);
   await this.submit.click();


  }
}