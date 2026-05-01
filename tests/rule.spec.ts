import { test, expect } from '@playwright/test';
import { LoginLocators } from '../locators/login.locators';
import { validUsers, invalidUsers } from '../test-data/users';

test('should login with valid credentials', async ({ page }) => {
  await page.goto('http://localhost:8080');

  await page.fill(LoginLocators.email, validUsers[0].email);
  await expect(page.locator(LoginLocators.password)).toBeVisible();
  await page.fill(LoginLocators.password, validUsers[0].password);
  await page.click(LoginLocators.login_button);



  await page.goto('http://localhost:8080/rules/create');
  await page.fill('#ffInput_title', 'Regula Unu');
  await page.locator('#ffInput_trigger').selectOption('store-journal');
  await page.locator('#ffInput_rule_group_id').selectOption('1');
  await page.check('#ffInput_stop_processing');
  await page.locator('select[name="triggers[1][type]"]').selectOption('foreign_amount_is');
  await page.fill('input[name="triggers[1][value]"]', '10');
  await page.locator('select[name="actions[1][type]"]').selectOption('add_tag');
  await page.fill('input[name="actions[1][value]"]', 'Eticheta Test');
  await page.check('#ffInput_run_after_form');
  await page.getByRole('button', {name:'Salvati regulă nouă'}).click();



});