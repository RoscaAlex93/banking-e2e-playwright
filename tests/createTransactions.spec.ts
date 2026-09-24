import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { TransactionPage } from '../pages/transaction-page';
import { getTodayDate } from '../utils/date';
import { createDBConnection } from '../utils/db';
import { transactionName } from '../utils/dataFactory';
import { deleteTransaction } from '../utils/api';


test('Create an expense transaction', async ({ page }) => {
  const transactionPage = new TransactionPage(page);
  const connection = await createDBConnection();
  
  const today = getTodayDate();
  const name = transactionName();
  


  await transactionPage.gotocreateExpenses();
  await transactionPage.createTrsansaction(name, 'cont', 'dawdawd', '1', 'Nume2','1','tag#0', today, 'note');
  await expect(page.locator('.alert-success')).toContainText(name);
const [transactionDb] = await (connection as any).query(
  'SELECT id, description FROM transaction_journals WHERE description = ?',
  [name]
);

expect(transactionDb.length).toBeGreaterThan(0);
expect(transactionDb[0].description).toBe(name);

const transactionId = transactionDb[0].id;
const response = await deleteTransaction(page.request, transactionId);
expect(response.ok()).toBeTruthy();

await connection.end();
});


test('Create an deposit transaction', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const transactionPage = new TransactionPage(page);
  const connection = await createDBConnection();
  const today = getTodayDate();
  const name = transactionName();
  


  await transactionPage.gotocreateDeposit();
  await transactionPage.createTrsansaction(name, 'cont', 'dawdawd', '1', 'Nume2','1','tag#0', today, 'note');
  await expect(page.locator('.alert-success')).toContainText(name);

   const [transactionDb] = await (connection as any).query(
      'SELECT id FROM transaction_journals WHERE description = ?',
  [name]
   );

     const transactionId = transactionDb[0].id;
   const response = await deleteTransaction(

  page.request,

  transactionId

);

expect(response.ok()).toBeTruthy();
});

test('Create an transfer transaction', async ({ page }) => {
  const transactionPage = new TransactionPage(page);
  const connection = await createDBConnection();
  const today = getTodayDate();
  const name = transactionName();
  

  await transactionPage.gotocreateTransfer();
  await transactionPage.createTrsansaction(name, 'cont', 'dawdawd', '1', 'Nume2','1','tag#0', today, 'note');
  await expect(page.locator('.alert-success')).toContainText(name);

   const [transactionDb] = await (connection as any).query(
      'SELECT id FROM transaction_journals WHERE description = ?',
  [name]
   );
   
     const transactionId = transactionDb[0].id;
   const response = await deleteTransaction(

  page.request,

  transactionId

);

expect(response.ok()).toBeTruthy();
});