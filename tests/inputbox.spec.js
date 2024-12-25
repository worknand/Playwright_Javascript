const {test,expect} =  require('@playwright/test'); //from node modules and two packages 

test("inputbox",async ({page}) => {
  await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2F");


  // before validations for inputbox
  await expect (await page.locator("#FirstName")).toBeVisible();
  await expect (await page.locator("#FirstName")).toBeEmpty();
  await expect (await page.locator("#FirstName")).toBeEditable();
  await expect (await page.locator("#FirstName")).toBeEnabled();
//   await page.locator("#FirstName").fill("Nanda");
   await page.fill("#FirstName","Nanda");

 //wait

   await page.waitForTimeout(2000); //pausing code




  })