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
  const subscriptionPage = new SubscriptionPage(page);
  const withdrawalPage = new TransactionPage(page);


  await subscriptionPage.goto();
  await subscriptionPage.createSubscription('100', subscription, '1', 'add_tag', tagN,);

  await withdrawalPage.gotocreateExpenses();
  await withdrawalPage.createTrsansactionSubscription(transactionDescription,'cont unu','dawdawd','100','Nume2','1','Tag',subscription,today,'notes',);
await expect(page.locator('.alert-success')).toContainText('Success');
  
  await withdrawalPage.gotowithdrawlList();
await page.locator('table').getByText(transactionDescription).click();
page.pause();
page.locator('table').getByText(transactionDescription)
await expect(page.getByText(subscription)).toBeVisible();
  
  

});