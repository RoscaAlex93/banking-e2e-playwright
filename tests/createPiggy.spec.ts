import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { PiggyPage } from '../pages/piggy-page';
import { PiggyName, PyggyName2 } from '../utils/dataFactory';
import { getTodayDate } from '../utils/date';


test('Create piggy account', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const piggyPage = new PiggyPage(page);

  const name = PiggyName();

  await loginPage.goto();
  await loginPage.login('test@test.ro', 'testtesttesttest');

  await piggyPage.goto();
  await piggyPage.create(name, '1000', '1', 'asd');
});

test('Create piggy account with optional fields', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const piggyPage = new PiggyPage(page);

  const name = PiggyName();
  const name2 = PyggyName2();
  const today = getTodayDate();

  
  await loginPage.goto();
  await loginPage.login('test@test.ro', 'testtesttesttest');

  await piggyPage.goto();
  await piggyPage.create(name, '1000', '1', 'asd');
  await expect(page.locator('.alert-success')).toContainText('Success');


  await piggyPage.goto();
  await piggyPage.createOptional(name2, '1000', '1', 'asd', today, 'note');
  await expect(page.locator('.alert-success')).toContainText('Succes');

  
});



