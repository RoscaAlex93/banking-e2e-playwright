import { test, expect } from '@playwright/test';
import { LoginLocators } from '../../locators/login.locators';
import { validUsers, invalidUsers } from '../../test-data/users';
import { createExpenseName, createCategoryName, createBudgetName, transactionName, BugetName, randomAmount} from '../../utils/dataFactory';

const transactionDescription = transactionName();
const expenseName = createExpenseName();
const categoryName = createCategoryName();
const budgetName = createBudgetName();
const Buget = BugetName();
const sumValue = randomAmount(); 

test('Validate overspending buget flow', async ({ page }) => {
  await page.goto('http://localhost:8080');

  await page.fill(LoginLocators.email, validUsers[0].email);
  await expect(page.locator(LoginLocators.password)).toBeVisible();
  await page.fill(LoginLocators.password, validUsers[0].password);
  await page.click(LoginLocators.login_button);


await page.goto('http://localhost:8080/budgets/create');
await page.fill('#ffInput_name', Buget);
await page.locator('#ffInput_auto_budget_type').selectOption('1');
await page.fill('#ffInput_auto_budget_amount', '6000')
 await page.locator('.btn-success').click();


await page.goto('http://localhost:8080/budgets');

await page
  .locator('tr', { hasText: Buget })
  .locator('.fa-pencil')
  .click();
await page.fill('#ffInput_auto_budget_amount', '10000');
await page.click('.btn-success');
await expect(
  page.locator('.alert')
).toBeVisible();


await page.goto('http://localhost:8080/budgets');

await page
  .locator('tr', { hasText: Buget })
  .locator('.btn-danger')
  .click();
  await page.click('input[name="submit"]');
await expect(
  page.locator('.alert')
).toBeVisible();




});
