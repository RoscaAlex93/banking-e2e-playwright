import { test, expect } from '@playwright/test';
import { BugetPage } from '../../pages/buget-page';
import { LoginPage } from '../../pages/login-page';
import { BugetlistPage } from '../../pages/bugetlist-page';
import { WithdrawalPage } from '../../pages/withdrawal-page';
import { createBudgetName } from '../../utils/dataFactory';
import { createDBConnection } from '../../utils/db';
import { transactionName } from '../../utils/dataFactory';

test('e2e flow for buget', async ({ page }) => {
  const bugetName = createBudgetName();
  const connection = await createDBConnection();
  const transactionDescription = transactionName();

  const loginPage = new LoginPage(page);
  const bugetPage = new BugetPage(page);
  const withdrawalPage = new WithdrawalPage(page);
  const bugetlistPage = new BugetlistPage(page);

  await loginPage.goto();
  await loginPage.login('test@test.ro', 'testtesttesttest');

  await bugetPage.goto();
  await bugetPage.create(bugetName);

  await expect(bugetPage.successMessage).toContainText('Succes!');



const [bugetDb] = await (connection as any).query(
  'SELECT * FROM budgets WHERE name = ?',
  [bugetName]
);

expect(bugetDb.length).toBeGreaterThan(0);



await withdrawalPage.goto();
await withdrawalPage.create(transactionDescription, '100', 'cont unu', bugetName);
console.log('Generated description:', transactionDescription);
await expect(withdrawalPage.successMessage).toContainText('Succes!');

 const [transactionDb] = await (connection as any).query(
 'SELECT * FROM transaction_journals WHERE description = ?',
  [transactionDescription]
);

expect(transactionDb.length).toBeGreaterThan(0);
expect(transactionDb[0].description).toBe(transactionDescription);
await connection.end();



await bugetlistPage.goto();
await page.getByRole('link', { name: bugetName }).click();
await expect(page.getByText(transactionDescription)).toBeVisible();
});