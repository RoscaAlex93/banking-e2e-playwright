import { test, expect } from '@playwright/test';
import { LoginLocators } from '../locators/login.locators';
import { validUsers, invalidUsers } from '../test-data/users';

test('should login with valid credentials', async ({ page }) => {
  await page.goto('http://localhost:8080');

  await page.fill(LoginLocators.email, validUsers[0].email);
  await expect(page.locator(LoginLocators.password)).toBeVisible();
  await page.fill(LoginLocators.password, validUsers[0].password);
  await page.click(LoginLocators.login_button);

  await page.getByRole('link', { name: ' Pușculiță', exact: true }).click();
  await page.getByRole('link',{ name:'Creați o nouă pușculiță' }).click();
  await page.fill('#ffInput_name','Pusculita');
  await page.fill('#ffInput_target_amount','10000');
  await page.locator('#ffInput_transaction_currency_id').selectOption('1');
  await page.locator('#ffInput_accounts').selectOption({ index: 0 });
  await page.getByRole('button', {name:'Salvați pușculița'}).click();

});