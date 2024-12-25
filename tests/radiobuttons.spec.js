const {test,expect} =  require('@playwright/test'); //from node modules and two packages 

test("radiobutton",async ({page}) => {
  await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2F"); 

  // radio button
  await page.locator("#gender-male").check();  // it clicks
  await expect( await page.locator("#gender-male")).toBeChecked();
  await page.waitForTimeout(2000); //pausing code
  await expect( await page.locator("#gender-male").isChecked()).toBeTruthy();
  //await page.locator("#gender-male").check(); 

  //to check not click condition
  await expect(await page.locator("#gender-female").isChecked()).toBeFalsy();



  })