import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { subscriptionName, } from '../utils/dataFactory';
import { SubscriptionPage } from '../pages/subscription-page'
import { getPreviousYearDate } from '../utils/date';
import { getTodayDate } from '../utils/date'; 

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