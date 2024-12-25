//codegen
//npx playwright codegen
//npx playwright codegen --help
//npx playwright codegen -o tests/filename.spec.js

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('nandynanda');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('nanda1234');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Log out' }).click();
});
