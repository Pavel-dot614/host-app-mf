import { test, expect } from '@playwright/test';

const HOME_URL = 'http://localhost:3000';
const SHOW_TODO = 'Показать таблицу Todo';
const HIDDEN_TODO = 'Скрыть таблицу Todo';

test('shows the todo table when the button is clicked', async ({ page }) => {
  await page.goto(HOME_URL);

  await page.getByRole('button', { name: SHOW_TODO }).click();

  await expect(
    page.getByRole('columnheader', { name: 'userId' }),
  ).toBeVisible();
});

test('hides the todo table when the button is clicked again', async ({
  page,
}) => {
  await page.goto(HOME_URL);
  await page.getByRole('button', { name: SHOW_TODO }).click();
  await expect(
    page.getByRole('columnheader', { name: 'userId' }),
  ).toBeVisible();

  await page.getByRole('button', { name: HIDDEN_TODO }).click();

  await expect(
    page.getByRole('columnheader', { name: 'userId' }),
  ).not.toBeVisible();
});
