import { test, expect } from '@playwright/test';

test('should login with valid credentials', async ({ page }) => {
  await page.goto('http://localhost:8080');

  await page.fill('input[name=email]', 'test@test.ro');
  await expect(page.locator('input[name=password]')).toBeVisible();
  await page.fill('input[name=password]', 'testtesttesttest');
  await page.click('button[type=submit]');
  await expect(page).toHaveURL(/new-user/);
});