import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login-page';
import { WithdrawalPage } from '../../pages/withdrawal-page';
import { LiabiliteiesPage } from '../../pages/liabilities-page';
import { createCreditName } from '../../utils/dataFactory';
import { getPreviousDayDate } from '../../utils/date';
import { transactionName } from '../../utils/dataFactory';
import { createDBConnection } from '../../utils/db';
test('user can login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const liabiliteiesPage = new LiabiliteiesPage(page);
  const withdrawalPage = new WithdrawalPage(page);

  const connection = await createDBConnection();
const name = createCreditName();
const date = getPreviousDayDate();
const transaction = transactionName();

  await loginPage.goto();
  await loginPage.login('test@test.ro', 'testtesttesttest');

  await liabiliteiesPage.gotoCreate();
  await liabiliteiesPage.fillTheForm(name, '1', '10000', 'credit', date, '5', 'monthly');

  await withdrawalPage.goto();
  await withdrawalPage.createC(transaction, '1000', name, 'Cont unu');
  

  const [bugetDb] = await (connection as any).query(
  'SELECT * FROM accounts WHERE name = ?',
  [name]
);

expect(bugetDb.length).toBeGreaterThan(0);
});