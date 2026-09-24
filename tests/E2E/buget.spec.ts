import { test, expect } from '@playwright/test';
import { BugetPage } from '../../pages/buget-page';
import { LoginPage } from '../../pages/login-page';
import { BugetlistPage } from '../../pages/bugetlist-page';
import { TransactionPage } from '../../pages/transaction-page';
import { createBudgetName } from '../../utils/dataFactory';
import { createDBConnection } from '../../utils/db';
import { transactionName } from '../../utils/dataFactory';
import { getTodayDate } from '../../utils/date';

test('e2e flow for buget', async ({ page }) => {
  const bugetName = createBudgetName();
  const connection = await createDBConnection();
  const transactionDescription = transactionName();
  const Today = getTodayDate();
  const bugetPage = new BugetPage(page);
  const withdrawalPage = new TransactionPage(page);
  const bugetlistPage = new BugetlistPage(page);


  await bugetPage.goto();
  await bugetPage.create(bugetName);

  await expect(bugetPage.successMessage).toContainText('Success!');



const [bugetDb] = await (connection as any).query(
  'SELECT * FROM budgets WHERE name = ?',
  [bugetName]
);

expect(bugetDb.length).toBeGreaterThan(0);



await withdrawalPage.gotocreateExpenses();
await withdrawalPage.createTrsansaction(transactionDescription,'cont unu','dawdawd', '100',bugetName,'1','tag',Today, 'notes');
await expect(page.locator('.alert-success')).toContainText('Success');

 const [transactionDb] = await (connection as any).query(
 'SELECT * FROM transaction_journals WHERE description = ?',
  [transactionDescription]
);

expect(transactionDb.length).toBeGreaterThan(0);
expect(transactionDb[0].description).toBe(transactionDescription);
await connection.end();



await bugetlistPage.goto();
await page.getByRole('link', { name: bugetName }).click();
await expect(page.getByRole('link', { name: transactionDescription })).toBeVisible();});