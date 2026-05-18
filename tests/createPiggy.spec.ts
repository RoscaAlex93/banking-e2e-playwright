import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login-page';\
import { PiggyPage } from '../pages/piggy-page';
import { PiggyName } from '../utils/dataFactory';


test('Create piggy account', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const piggyPage = new PiggyPage(page);

  const name = PiggyName(page);

  await loginPage.goto();
  await loginPage.login('test@test.ro', 'testtesttesttest');

  await piggyPage.goto();
  await piggyPage.create(name, '1000', 1, )
});


