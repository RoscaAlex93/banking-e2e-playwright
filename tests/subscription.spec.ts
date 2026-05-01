import { test, expect } from '@playwright/test';
import { LoginLocators } from '../locators/login.locators';
import { validUsers, invalidUsers } from '../test-data/users';
import { getTomorrowFormatted } from '../utils/date';



test('Create a subscription', async ({ page }) => {
  await page.goto('http://localhost:8080');

  await page.fill(LoginLocators.email, validUsers[0].email);
  await expect(page.locator(LoginLocators.password)).toBeVisible();
  await page.fill(LoginLocators.password, validUsers[0].password);
  await page.click(LoginLocators.login_button);




  await page.click('.fa-calendar-o');
  await page.click('.btn.btn-lg.btn-success');
  await page.fill('#ffInput_name', 'Abonament');
  await page.locator('#ffInput_transaction_currency_id').selectOption('1');
  await page.fill('#ffInput_amount_min', '1');
  await page.fill('#ffInput_amount_max', '1000');
  await page.fill('#ffInput_date', getTomorrowFormatted());
  await page.locator('#ffInput_repeat_freq').selectOption('monthly');
  await page.getByRole("button", {name:'Store new subscription'}).click();
    await page.click('.fa-calendar-o');
  await page.click('.btn.btn-danger.btn-xs');
  await page.click('.btn-danger');
  


  test('Create recurence payment', async ({ page }) => {
  await page.goto('http://localhost:8080');

  await page.fill(LoginLocators.email, validUsers[0].email);
  await expect(page.locator(LoginLocators.password)).toBeVisible();
  await page.fill(LoginLocators.password, validUsers[0].password);
  await page.click(LoginLocators.login_button);

 await page.goto('http://localhost:8080/recurring/create');
 await page.fill('#ffInput_title','Plata lunara');
 await page.locator('#ffInput_repetition_type')
await page.locator('#ffInput_repetition_type')
await page.locator('#ffInput_repetition_type').click();

await page.locator('#ffInput_repetition_type')
  .selectOption({ index: 2 });

 await page.locator('[data-value="transfer"]').click();
 await page.fill('#ffInput_transaction_description','Plata Lunara');
 await page.locator('#transaction_currency_id').click;
 await page.fill('#ffInput_amount', '100');
await page.locator('#ffInput_destination_id')
  .selectOption({ index: 2 });

await page.getByRole('button', {name:  'Salvați tranzacție recurentă'  }).click();
});
});