import { test, expect } from '@playwright/test';
import { LoginLocators } from '../../locators/login.locators';
import { validUsers, invalidUsers } from '../../test-data/users';
import { createExpenseName, createCategoryName, createBudgetName, transactionName, BugetName} from '../../utils/dataFactory';

const transactionDescription = transactionName();
const expenseName = createExpenseName();
const categoryName = createCategoryName();
const budgetName = createBudgetName();
const Buget = BugetName();

test('Validate buget flow', async ({ page }) => {
  await page.goto('http://localhost:8080');

  await page.fill(LoginLocators.email, validUsers[0].email);
  await expect(page.locator(LoginLocators.password)).toBeVisible();
  await page.fill(LoginLocators.password, validUsers[0].password);
  await page.click(LoginLocators.login_button);


await page.goto('http://localhost:8080/budgets/create');
await page.fill('#ffInput_name', Buget);
  await page.locator('.btn-success').click();


  await page.goto('http://localhost:8080/accounts/create/asset');
  await page.fill('#ffInput_name', expenseName);
  await page.locator('.btn-success').click();
  

 await page.goto('http://localhost:8080/categories/create');
 await page.fill('#ffInput_name', categoryName);
 await page.locator('.btn-success').click();


await page.goto('http://localhost:8080/budgets/create');
await page.fill('#ffInput_name', budgetName);
await page.locator('.btn-succes');

await page.goto('http://localhost:8080/transactions/withdrawal');
    await page.getByText('Creează o tranzacție nouă').click();
    await page.fill('input[name="description[]"]','descriere');

await page.goto('http://localhost:8080/transactions/create/withdrawal');
  await page.fill('input[name="description[]"]', transactionDescription);
  await page.locator('input[name="source[]"]').click();
await page.fill('input[name="source[]"]', expenseName);
await page.locator('section.dropdown li', { hasText: expenseName}).click();

await page.locator('input[name="destination[]"]').click();
await page.fill('input[name="destination[]"]', 'Cash');
await page.locator('section.dropdown li', { hasText: 'Cash account'}).click();
//await page.locator('select[name="foreign_currency[]"]').selectOption('1');
await page.locator('select[title="Buget"]').selectOption({ label : Buget });
await page.fill('input[name="amount[]"]', '100');
await page.fill('input[name="foreign_amount[]"]','0');
await page.locator('#submitButton').click();

await page.goto('http://localhost:8080/budgets');
await page.getByRole('link', { name: Buget }).click();

await expect(
  page.locator('tr', { hasText: 'transactionDescription' })
).toBeVisible();



});
