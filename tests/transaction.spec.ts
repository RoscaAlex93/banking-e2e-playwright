import { test, expect } from '@playwright/test';
import { LoginLocators } from '../locators/login.locators';
import { validUsers, invalidUsers } from '../test-data/users';

test('Credit', async ({ page }) => {
  await page.goto('http://localhost:8080');

  await page.fill(LoginLocators.email, validUsers[0].email);
  await expect(page.locator(LoginLocators.password)).toBeVisible();
  await page.fill(LoginLocators.password, validUsers[0].password);
  await page.click(LoginLocators.login_button);

  await page.goto('http://localhost:8080/accounts/create/liabilities');
  await page.fill('#ffInput_name', 'Nume Credit')
  await page.locator('#ffInput_currency_id').selectOption({ index: 0 });
  await page.locator('#ffInput_liability_type_id').selectOption({ index: 2 });
  await page.fill('#ffInput_opening_balance', '10000');
  await page.locator('#ffInput_liability_direction').selectOption({ index: 0 });
  await page.fill('#ffInput_interest', '10');
  await page.locator('#ffInput_interest_period').selectOption({ index: 2 });
  await page.getByRole('button', {name: 'Salvați provizion nou' });
  
});



test('Create deposit', async ({ page }) => {
  await page.goto('http://localhost:8080');

  await page.fill(LoginLocators.email, validUsers[0].email);
  await expect(page.locator(LoginLocators.password)).toBeVisible();
  await page.fill(LoginLocators.password, validUsers[0].password);
  await page.click(LoginLocators.login_button);

    await page.goto('http://localhost:8080/transactions/create/deposit');
  await page.fill('input[name="description[]"]', 'Descriere Deposit');
  await page.locator('input[name="source[]"]').click();
await page.getByRole('button', { name: /^Cont Unu\b/ }).click();

await page.locator('input[name="destination[]"]').click();
await page.getByRole('button', { name: /^asd\b/ }).click();
await page.locator('select[name="foreign_currency[]"]').selectOption('1');


await page.fill('input[name="amount[]"]', '100');
await page.fill('input[name="foreign_amount[]"]','0');
await page.locator('#submitButton').click();
});


test('Tranzactie cheltuieli', async ({ page }) => {
  await page.goto('http://localhost:8080');

  await page.fill(LoginLocators.email, validUsers[0].email);
  await expect(page.locator(LoginLocators.password)).toBeVisible();
  await page.fill(LoginLocators.password, validUsers[0].password);
  await page.click(LoginLocators.login_button);

    await page.goto('http://localhost:8080/transactions/withdrawal');
    await page.getByText('Creează o tranzacție nouă').click();
    await page.fill('input[name="description[]"]','descriere');
await page.locator('input[name="source[]"]').click();
await page.getByRole('button', { name: /^Cont Unu\b/ }).click();

await page.locator('input[name="destination[]"]').click();
await page.getByRole('button', { name: /^asd\b/ }).click();

await page.fill('input[name="amount[]"]', '100');
await page.fill('input[name="foreign_amount[]"]','0');
await page.locator('#submitButton').click();
});


test('Create income account', async ({ page }) => {
  await page.goto('http://localhost:8080');

  await page.fill(LoginLocators.email, validUsers[0].email);
  await expect(page.locator(LoginLocators.password)).toBeVisible();
  await page.fill(LoginLocators.password, validUsers[0].password);
  await page.click(LoginLocators.login_button);
  await page.goto('http://localhost:8080/accounts/create/revenue');
  await page.fill('#ffInput_name','Cont Venituri')
  await page.getByRole('button', {name: ' Salvați un nou cont de venituri '}).click();

});

test('Create spending account', async ({ page }) => {
  await page.goto('http://localhost:8080');

  await page.fill(LoginLocators.email, validUsers[0].email);
  await expect(page.locator(LoginLocators.password)).toBeVisible();
  await page.fill(LoginLocators.password, validUsers[0].password);
  await page.click(LoginLocators.login_button);

  await page.goto('http://localhost:8080/accounts/create/expense');
  await page.fill('#ffInput_name', 'Cont Cheltuieli');
  await page.getByRole('button',{name: 'Salvați un nou cont de cheltuieli'});

});