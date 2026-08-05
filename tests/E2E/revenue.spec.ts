import { test } from '@playwright/test';
import { LoginPage } from '../../pages/login-page';
import { RevenuePage } from '../../pages/revenue-page';
import { accountName } from '../../utils/dataFactory';
import { TransactionPage } from '../../pages/transaction-page';
import { transactionName } from '../../utils/dataFactory';
import { createDBConnection } from '../../utils/db';
import { getTodayDate } from '../../utils/date';

test('user can login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const revenuePage = new RevenuePage(page);
  const depositPage = new TransactionPage(page);


const connection = await createDBConnection();


  const name = accountName();
  const transaction = transactionName();
  const Today = getTodayDate();


  await loginPage.goto();
  await loginPage.login('test@test.ro', 'testtesttesttest');

  await revenuePage.goto();
  await revenuePage.filltheForm(name);

  await depositPage.gotocreateDeposit();
  await depositPage.createTrsansaction(transaction,'cont unu','cont', '100','category','tag',Today, 'notes');

 const [transactionDb] = await (connection as any).query(
 'SELECT * FROM transaction_journals WHERE description = ?',
  [transaction]
);





});