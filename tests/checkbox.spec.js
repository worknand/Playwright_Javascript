const {test,expect} =  require('@playwright/test'); //from node modules and two packages 

test("checkbox",async ({page}) => {
  await page.goto("https://www.ironspider.ca/forms/checkradio.htm"); 

// single check checkBox
  await  page.locator("//input[@value='red']").check();
  await expect( await page.locator("//input[@value='red']")).toBeChecked();
  await expect( await page.locator("//input[@value='red']").isChecked()).toBeTruthy();

  //to check not click condition
  await expect(await page.locator("//input[@value='orange']").isChecked()).toBeFalsy();

  // multiple checkbox
  const multiCheck=[
                   "//input[@value='red']",
                   "//input[@value='yellow']",
                   "//input[@value='blue']",
                   "//input[@value='orange']",
                   "//input[@value='green']",
                   "//input[@value='purple']"

  ];
  
  for (const locators of multiCheck){
    await page.locator(locators).check();
  }

  await page.waitForTimeout(2000); //pausing code

  for (const locators of multiCheck){  // uncheck
    await page.locator(locators).uncheck();
  }


  await page.waitForTimeout(2000); //pausing code
  })