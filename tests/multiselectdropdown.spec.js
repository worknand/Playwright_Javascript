const {test,expect} =  require('@playwright/test'); //from node modules and two packages 

test("Multiselect Dropdown",async ({page}) => {
  await page.goto("https://testautomationpractice.blogspot.com/");  

  // select multi dropdown 
  await page.locator('#colors').selectOption(['Blue','Red','Green'])

  // assertions
  // 1.check no of options in dropdown - approach 1
  const options=await page.locator('#colors option');
  await expect(options).toHaveCount(7);

  //2.check no of option in dropdown =approach 2

 const options1=await page.$$('#colors option');
 console.log(options1.length);
 await expect(options1.length).toBe(7);

 //3.check presence of values in dropdown = approach 1

  const textOptions=await page.locator('#colors').textContent();
 console.log(textOptions.length);
 await expect(textOptions.includes('Red')).toBeTruthy();

  await page.waitForTimeout(5000);

});