
const {test,expect} =  require('@playwright/test'); //from node modules and two packages 
const exp = require('constants');

test("SoftAssertiontest",async ({page}) => {
  await page.goto("https://demoblaze.com/");

  // hard assertions
  await expect(page).toHaveTitle('STORE');
  await expect(page).toHaveURL("https://demoblaze.com/");
  await expect(page.locator('a#nava')).toBeVisible();

   // soft assertions
   await expect.soft(page).toHaveTitle('STOE');
   await expect.soft(page).toHaveURL("https://demoblaze.com/");
   await expect.soft(page.locator('a#nava')).toBeVisible();


  })