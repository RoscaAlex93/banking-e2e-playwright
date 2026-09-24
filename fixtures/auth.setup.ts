import { test as setup } from '@playwright/test';
import { LoginPage } from '../pages/login-page';

setup('authenticate', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('test@test.ro', 'testtesttesttest');

  await page.context().storageState({ path: 'playwright/.auth/user.json' });
});