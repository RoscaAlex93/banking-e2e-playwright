import { test, expect } from '@playwright/test';
import { LoginLocators } from '../locators/login.locators';
import { getNextMonthYear } from '../utils/date.spec';
import { getPreviousMonthYear } from '../utils/date.spec';

test('Check buget interval', async ({ page }) => {
  await page.goto('http://localhost:8080');
  await page.fill('input[name=email]', 'test@test.ro');
  await expect(page.locator('input[name=password]')).toBeVisible();
  await page.fill('input[name=password]', 'testtesttesttest');
  await page.click('button[type=submit]');
  
  await page.getByRole('link', { name: ' Buget', exact: true }).click();
  await expect(page.locator('select[name=previous]')).toBeVisible();
  await page.locator('select[name=previous]').click();
    const nextPrevious = getPreviousMonthYear();
await page.locator('select[name="previous"]').selectOption({
  label: nextPrevious
});
await page.locator('select[name=next]').click();
    const nextMonth = getNextMonthYear();
await page.locator('select[name="next"]').selectOption({
  label: nextMonth
});
});
