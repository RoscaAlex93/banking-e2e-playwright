import { test, expect } from '@playwright/test';
import { LoginLocators } from '../locators/login.locators';
import { validUsers, invalidUsers } from '../test-data/users';
import { getNextMonthYear } from '../utils/date';
import { getPreviousMonthYear } from '../utils/date';

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
await page.locator('.btn.btn-xs.btn-danger').click();
await page.locator('.btn.btn-danger.pull-right').click();
await page.pause();
});


test('Check buget interval', async ({ page }) => {
  await page.goto('http://localhost:8080');
  await page.fill('input[name=email]', 'test@test.ro');
  await expect(page.locator('input[name=password]')).toBeVisible();
  await page.fill('input[name=password]', 'testtesttesttest');
  await page.click('button[type=submit]');
  
  await page.getByRole('link', { name: ' Buget', exact: true }).click();
  await expect(page.locator('select[name=previous]')).toBeVisible();
  await page.locator('select[name=previous]').click();
    const nextPrevious = getPreviousMonthYear();
await page.locator('select[name="previous"]').selectOption({
  label: nextPrevious
});
await page.locator('select[name=next]').click();
    const nextMonth = getNextMonthYear();
await page.locator('select[name="next"]').selectOption({
  label: nextMonth
});
});
