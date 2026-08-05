import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login-page';
import { TransactionPage } from '../../pages/transaction-page';
import { LiabiliteiesPage } from '../../pages/liabilities-page';
import { createCreditName } from '../../utils/dataFactory';
import { getPreviousDayDate, getTodayDate } from '../../utils/date';
import { transactionName } from '../../utils/dataFactory';
import { createDBConnection } from '../../utils/db';
test('user can login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const liabiliteiesPage = new LiabiliteiesPage(page);
  const withdrawalPage = new TransactionPage(page);

  const connection = await createDBConnection();
const name = createCreditName();
const date = getPreviousDayDate();
const transaction = transactionName();
const today = getTodayDate();

  await loginPage.goto();
  await loginPage.login('test@test.ro', 'testtesttesttest');

  await liabiliteiesPage.gotoCreate();
  await liabiliteiesPage.fillTheForm(name, '1', '10000', 'credit', date, '5', 'monthly');

  await withdrawalPage.gotocreateExpenses();
  await withdrawalPage.createTrsansaction(transaction,'cont unu','cont', '100','category','tag',today,'notes');

  const [bugetDb] = await (connection as any).query(
  'SELECT * FROM accounts WHERE name = ?',
  [name]
);

expect(bugetDb.length).toBeGreaterThan(0);
});