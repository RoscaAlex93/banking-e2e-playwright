import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { BugetPage } from '../pages/buget-page'
import { BugetName } from '../utils/dataFactory';
import { createDBConnection } from '../utils/db';
import { deleteBuget } from '../utils/api';

test('Create a buget', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const bugetPage = new BugetPage(page);
  const connection = await createDBConnection();
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
  const connection = await createDBConnection();
  const bugetName = BugetName();

  await loginPage.goto();
  await loginPage.login('test@test.ro', 'testtesttesttest');

  await bugetPage.goto();
  await bugetPage.creatAattachments(bugetName, '1', '1000');
  await expect(page.locator('.alert-success')).toContainText(bugetName);
   
});