import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { BugetPage } from '../pages/buget-page'
import { BugetName, createBudgetName } from '../utils/dataFactory';

test('Create a buget', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const bugetPage = new BugetPage(page);

  const bugetName = BugetName();

  await loginPage.goto();
  await loginPage.login('test@test.ro', 'testtesttesttest');

  await bugetPage.goto();
  await bugetPage.create(bugetName);
});


test('Create a buget with autobuget', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const bugetPage = new BugetPage(page);

  const bugetName = BugetName();

  await loginPage.goto();
  await loginPage.login('test@test.ro', 'testtesttesttest');

  await bugetPage.goto();
  await bugetPage.createBugetType(bugetName, '1', '1000');
});

test('Create a buget with attachments', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const bugetPage = new BugetPage(page);

  const bugetName = BugetName();

  await loginPage.goto();
  await loginPage.login('test@test.ro', 'testtesttesttest');

  await bugetPage.goto();
  await bugetPage.creatAattachments(bugetName, '1', '1000');
});