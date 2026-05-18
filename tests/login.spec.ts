import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login-page';

test('Login with bad credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('test@mail.com', '123456');

});

test('Login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('test@test.ro', 'testtesttesttest');
});