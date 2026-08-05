import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { subscriptionName, } from '../utils/dataFactory';
import { SubscriptionPage } from '../pages/subscription-page'
import { getPreviousYearDate } from '../utils/date';
import { getTodayDate } from '../utils/date'; 
import { createDBConnection } from '../utils/db';
import { deleteRule } from '../utils/api';
import { ruleTitle } from '../utils/dataFactory';

test('Create a subscription', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const subscriptionPage = new SubscriptionPage(page);

 const name = subscriptionName();

  await loginPage.goto();
  await loginPage.login('test@test.ro', 'testtesttesttest');

  await subscriptionPage.goto();
  await subscriptionPage.createSubscriptionA(name, '1', '30');

});

test('Create a subscription with optional fields', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const subscriptionPage = new SubscriptionPage(page);

 const name = subscriptionName();
 const lastYear = getPreviousYearDate();
 const today = getTodayDate();

  await loginPage.goto();
  await loginPage.login('test@test.ro', 'testtesttesttest');

  await subscriptionPage.goto();
  await subscriptionPage.createSubscriptionOptional(name, '1', '30', lastYear, today, 'Notes for Notes' );
});

test('Create a subscription with rules', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const subscriptionPage = new SubscriptionPage(page);
  
 const name = subscriptionName();
 const lastYear = getPreviousYearDate();
 const today = getTodayDate();
 const connection = await createDBConnection();
 const rule = ruleTitle();
 

  await loginPage.goto();
  await loginPage.login('test@test.ro', 'testtesttesttest');

  await subscriptionPage.goto();
  await subscriptionPage.createSubscriptionOptional(name, '1', '30', lastYear, today, 'Notes for Notes' );
  await subscriptionPage.createRule(rule, 'store-journal', 'description_is');
  await expect(page.locator('.alert-success')).toContainText(name);
   const [transactionDb] = await (connection as any).query(
      'SELECT id FROM rules WHERE title = ?',
  [rule]
   );
   
     const transactionId = transactionDb[0].id;
     const response = await deleteRule(
  page.request,
  transactionId
);

expect(response.ok()).toBeTruthy();
});
