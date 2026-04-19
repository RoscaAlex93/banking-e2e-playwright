import { test, expect } from '@playwright/test';
import { LoginLocators } from '../locators/login.locators';
import { validUsers, invalidUsers } from '../test-data/users';

test('should login with valid credentials', async ({ page }) => {
  await page.goto('http://localhost:8080');

  await page.fill(LoginLocators.email, validUsers[0].email);
  await expect(page.locator(LoginLocators.password)).toBeVisible();
  await page.fill(LoginLocators.password, validUsers[0].password);
  await page.click(LoginLocators.login_button);
  await expect(page).toHaveURL(/new-user/);
});