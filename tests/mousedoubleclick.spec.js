const {test,expect} =  require('@playwright/test'); //from node modules and two packages 

test("Mousedoubleclick",async ({page}) => {

  await page.goto("https://testautomationpractice.blogspot.com/"); 

  const buttonCopy= await page.locator("//button[text()='Copy Text']");

  //double click
  await buttonCopy.dblclick();

 const f2= await page.locator("#field2");

 await expect(f2).toHaveValue('Hello World!');
 await page.waitForTimeout(5000);

})