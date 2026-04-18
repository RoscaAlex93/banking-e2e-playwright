import { test, expect } from '@playwright/test';

test('Check bank', async ({ page }) => {
  await page.goto('http://localhost:8080');

  await page.fill('input[name=email]', 'test@test.ro');
  await expect(page.locator('input[name=password]')).toBeVisible();
  await page.fill('input[name=password]', 'testtesttesttest');
  await page.click('button[type=submit]');


  await page.fill('input[name=bank_name]', 'BankCheck');
  await page.click('button[id="currency_dropdown_bank_balance"]');
  await page.click('a[data-id="11"]');
  await page.fill('input[name=bank_balance]', '10000');
  await page.fill('input[name=savings_balance]', '5000');
  await page.selectOption('select[id=lang_holder]', 'ro_RO');
  await page.click('input[type=submit]');


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