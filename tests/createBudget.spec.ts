import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { BudgetPage } from '../pages/budget-page'
import { BudgetName, createBudgetName } from '../utils/dataFactory';

test('Create a buget', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const budgetPage = new BudgetPage(page);

  const bugetName = BudgetName();

  await loginPage.goto();
  await loginPage.login('test@test.ro', 'testtesttesttest');

  await budgetPage.goto();
  await budgetPage.create(bugetName);
});


test('Create a buget with autobuget', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const budgetPage = new BudgetPage(page);

  const bugetName = BudgetName();

  await loginPage.goto();
  await loginPage.login('test@test.ro', 'testtesttesttest');

  await budgetPage.goto();
  await budgetPage.createBudgetType(bugetName, '1', '1000');
});

test('Create a buget with attachments', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const budgetPage = new BudgetPage(page);

  const bugetName = BudgetName();

  await loginPage.goto();
  await loginPage.login('test@test.ro', 'testtesttesttest');

  await budgetPage.goto();
  await budgetPage.creatAattachments(bugetName, '1', '1000');
});