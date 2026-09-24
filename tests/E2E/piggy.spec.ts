import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login-page'
import { PiggyPage } from '../../pages/piggy-page';
import { AccountPage } from '../../pages/account-page';
import { PiggyName, accountName } from '../../utils/dataFactory';
import { getTodayDate } from '../../utils/date';

test('user can login', async ({ page }) => {
const piggyN = PiggyName();
const accountN = accountName();
const todayDate = getTodayDate();

  const piggyPage = new PiggyPage(page);
  const accountPage = new AccountPage(page);


await accountPage.goto();
await accountPage.create(accountN, '1', '5000', todayDate);
  

  await piggyPage.goto();
  await piggyPage.create(piggyN, '10000', '1', accountN );

  await piggyPage.list();
  await piggyPage.clickButtonInRow(piggyN, '1000');

  await piggyPage.buttonLocator();
await expect(piggyPage.asertionPiggy(piggyN)).toBeVisible();

await piggyPage.clickPiggy(piggyN);



});