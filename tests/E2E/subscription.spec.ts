import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login-page';
import { SubscriptionPage } from '../../pages/subscription-page';
import { subscriptionName } from '../../utils/dataFactory';
import { WithdrawalPage } from '../../pages/withdrawal-page';
import { tagName } from '../../utils/dataFactory';
test('e2e flow for subscription', async ({ page }) => {
  const subscription = subscriptionName();
  const tagN = tagName();

  const loginPage = new LoginPage(page);
  const subscriptionPage = new SubscriptionPage(page);
  const withdrawalPage = new WithdrawalPage(page);

  await loginPage.goto();
  await loginPage.login('test@test.ro', 'testtesttesttest');


  await subscriptionPage.goto();
  await subscriptionPage.createSubscription('100', subscription, '1', 'add_tag', tagN,);

  await withdrawalPage.goto();
  await withdrawalPage.createB(subscription, '100', 'asd');

  await withdrawalPage.list();
  await expect(page.getByText(subscription)).toBeVisible();
  
  

});