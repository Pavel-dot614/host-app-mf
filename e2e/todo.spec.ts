import { test, expect } from '@playwright/test';

test('shows the todo table when the button is clicked', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await page.getByRole('button', { name: 'Показать таблицу Todo' }).click();

  await expect(
    page.getByRole('columnheader', { name: 'userId' }),
  ).toBeVisible();
});

test('hides the todo table when the button is clicked again', async ({
  page,
}) => {
  await page.goto('http://localhost:3000');
  await page.getByRole('button', { name: 'Показать таблицу Todo' }).click();
  await expect(
    page.getByRole('columnheader', { name: 'userId' }),
  ).toBeVisible();

  await page.getByRole('button', { name: 'Скрыть таблицу Todo' }).click();

  await expect(
    page.getByRole('columnheader', { name: 'userId' }),
  ).not.toBeVisible();
});
