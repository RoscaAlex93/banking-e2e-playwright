import { test, expect } from '@playwright/test';
import { LoginLocators } from '../locators/login.locators';
import { validUsers, invalidUsers } from '../test-data/users';

test('Create a buget', async ({ page }) => {
  await page.goto('http://localhost:8080');

  await page.fill(LoginLocators.email, validUsers[0].email);
  await expect(page.locator(LoginLocators.password)).toBeVisible();
  await page.fill(LoginLocators.password, validUsers[0].password);
  await page.click(LoginLocators.login_button);

  await page.getByRole('link', { name: ' Buget', exact: true }).click();
  await page.getByRole('link', { name: 'Creați un buget', exact: true }).click();
  await page.fill('input[name=name]', 'Masina Noua');
await page.locator('#ffInput_auto_budget_type').selectOption('1');
await page.locator('#ffInput_auto_budget_currency_id').selectOption('1');
await page.fill('input[name=auto_budget_amount]', '35000');
await page.locator('#ffInput_auto_budget_period').selectOption('monthly');
await page.setInputFiles('input[type="file"]', 'test-data/image.png');
await page.getByRole('button', { name: 'Salvați un nou budget' }).click();
});