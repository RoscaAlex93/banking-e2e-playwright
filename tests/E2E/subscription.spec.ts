import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login-page';
import { SubscriptionPage } from '../../pages/subscription-page';
import { subscriptionName } from '../../utils/dataFactory';
import { TransactionPage } from '../../pages/transaction-page';
import { tagName } from '../../utils/dataFactory';
import { transactionName } from '../../utils/dataFactory';
import { getTodayDate } from '../../utils/date';
test('e2e flow for subscription', async ({ page }) => {
  const subscription = subscriptionName();
  const tagN = tagName();
  
  const today = getTodayDate();
  const transactionDescription = transactionName();
  const loginPage = new LoginPage(page);
  const subscriptionPage = new SubscriptionPage(page);
  const withdrawalPage = new TransactionPage(page);

  await loginPage.goto();
  await loginPage.login('test@test.ro', 'testtesttesttest');


  await subscriptionPage.goto();
  await subscriptionPage.createSubscription('100', subscription, '1', 'add_tag', tagN,);

  await withdrawalPage.gotocreateExpenses();
  await withdrawalPage.createTrsansaction(transactionDescription,'cont unu','cont', '100','category','tag',today, 'notes');

  await expect(page.getByText(subscription)).toBeVisible();
  
  

});