import { test, expect } from '@playwright/test';
import { LoginLocators } from '../locators/login.locators';
import { validUsers, invalidUsers } from '../test-data/users';
import { OnboardingLocators } from '../locators/onboarding.locators';

test('should login with valid credentials', async ({ page }) => {
  await page.goto('http://localhost:8080');

  await page.fill(LoginLocators.email, validUsers[0].email);
  await expect(page.locator(LoginLocators.password)).toBeVisible();
  await page.fill(LoginLocators.password, validUsers[0].password);
  await page.click(LoginLocators.login_button);

});




test('Onboarding flow', async ({ page }) => {
  await page.goto('http://localhost:8080');

  await page.fill('input[name=email]', 'test@test.ro');
  await expect(page.locator('input[name=password]')).toBeVisible();
  await page.fill('input[name=password]', 'testtesttesttest');
  await page.click('button[type=submit]');


  await page.fill(OnboardingLocators.bank_name_input, 'BankCheck');
  await page.click(OnboardingLocators.currency_dropdown_button);
  await page.click(OnboardingLocators.currency_option_ron);
  await page.fill(OnboardingLocators.bank_balance_input, '10000');
  await page.fill(OnboardingLocators.savings_balance_input, '5000');
  await page.selectOption(OnboardingLocators.language_select, 'ro_RO');
  await page.click(OnboardingLocators.submit_button);


await page.getByText('Conturi').nth(0).click();
await page.getByText('Conturile de active').nth(1).click();

  await page.locator('button[type="button"]').nth(0).click();
  await page.getByText('Șterge').nth(0).click();
  await page.getByRole('button', { name: 'Șterge permanent' }).click();

await page.locator('button[type="button"]').nth(1).click();
  await page.getByText('Șterge').nth(0).click();
  await page.getByRole('button', { name: 'Șterge permanent' }).click();

  await page.locator('button[type="button"]').nth(1).click();
  await page.getByText('Șterge').nth(0).click();
  await page.getByRole('button', { name: 'Șterge permanent' }).click();

});