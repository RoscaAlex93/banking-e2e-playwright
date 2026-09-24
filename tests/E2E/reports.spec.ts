import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login-page';
import { ReportsPage } from '../../pages/reports-page';
import { AccountPage } from '../../pages/account-page';
import { TransactionPage } from '../../pages/transaction-page';
import { getLastWeek, getTodayDate } from '../../utils/date';
import { accountName } from '../../utils/dataFactory';
import { subscriptionName } from '../../utils/dataFactory';
import { transactionName } from '../../utils/dataFactory';

test('user can login', async ({ page }) => {
  const reportsPage = new ReportsPage(page);
  const accountPage = new AccountPage(page);
  const withdrawalPage = new TransactionPage(page);

  const name = accountName();
  const transaction = transactionName();
  const todayDate = getTodayDate();
  const lastWeek = getLastWeek();



  await accountPage.goto();
  await accountPage.create(name, '1', '5000', todayDate);

    await withdrawalPage.gotocreateExpenses();
  await withdrawalPage.createTrsansaction(transaction,'cont unu','dawdawd','100', 'Nume2','1','tag',todayDate, 'notes');


  await reportsPage.goto();
  await reportsPage.filltheForm('audit', name, lastWeek, todayDate);




  //await expect(page. locator 'text=Succes!')) .toBeVisible();

  




});