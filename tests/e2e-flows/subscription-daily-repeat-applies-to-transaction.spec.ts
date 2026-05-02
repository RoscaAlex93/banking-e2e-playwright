import { test, expect } from '@playwright/test';
import { LoginLocators } from '../../locators/login.locators';
import { validUsers, invalidUsers } from '../../test-data/users';
import { getNextMonthYear, getPreviousDayDate, getPreviousMonthDate, getPreviousYearDate, } from '../../utils/date';
import { subscriptionName, SubscriptionTransaction } from '../../utils/dataFactory';

const subName = subscriptionName();
const subBillName = SubscriptionTransaction();

test('Create a subscription', async ({ page }) => {
  await page.goto('http://localhost:8080');

  await page.fill(LoginLocators.email, validUsers[0].email);
  await expect(page.locator(LoginLocators.password)).toBeVisible();
  await page.fill(LoginLocators.password, validUsers[0].password);
  await page.click(LoginLocators.login_button);




  await page.goto('http://localhost:8080/subscriptions/create');
  await page.fill('#ffInput_name', subName);
  await page.locator('#ffInput_transaction_currency_id').selectOption('11');
  await page.fill('#ffInput_amount_min', '30');
  await page.fill('#ffInput_amount_max', '50');
  await page.fill('#ffInput_date', getPreviousDayDate());
  await page.locator('#ffInput_repeat_freq').selectOption('daily');
  await page.locator('.btn-success').click();

await page.goto('http://localhost:8080/subscriptions');
const row = page.locator('tr', { hasText: subName });
const text = (await row.locator('span.text-success').textContent())?.trim() || '';
const clean = text.replace(/[^\d.,-]/g, '');
const formatted = clean.replace(',', '.');



await page.goto('http://localhost:8080/transactions/create/withdrawal');
  await page.fill('input[name="description[]"]', subBillName);
  await page.locator('input[name="source[]"]').click();
await page.fill('input[name="source[]"]', 'Cont Unu');
await page.locator('section.dropdown li', { hasText: 'Cont unu'}).click();
await page.fill('input[name="amount[]"]', formatted);
await page.fill('input[name="foreign_amount[]"]','0');
await page.locator('select[title="Subscription"]').selectOption({ label: subName });
await page.locator('#submitButton').click();

await page.goto
  await page.goto('http://localhost:8080');
await page.goto('http://localhost:8080/transactions/withdrawal');
await page.getByRole('link', { name: subBillName }).click();

await expect(
  page.locator('td', { hasText: subBillName })
).toBeVisible();
console.log(clean);

const value = page
  .locator('tr', { hasText: 'Valoare totală' })
  .locator('span.money-negative');

await expect(value).toBeVisible();
await expect(value).toContainText(`-${clean}`);



});