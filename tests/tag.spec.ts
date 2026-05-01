import { test, expect } from '@playwright/test';
import { LoginLocators } from '../locators/login.locators';
import { validUsers, invalidUsers } from '../test-data/users';

test('Create recurence payment', async ({ page }) => {
  await page.goto('http://localhost:8080');

  await page.fill(LoginLocators.email, validUsers[0].email);
  await expect(page.locator(LoginLocators.password)).toBeVisible();
  await page.fill(LoginLocators.password, validUsers[0].password);
  await page.click(LoginLocators.login_button);

 await page.goto('http://localhost:8080/tags/create');
 await page.fill('#ffInput_tag', 'Nume Eticheta');
 await page.getByRole('button', {name: ' Salvați o nouă etichetă' });

 });