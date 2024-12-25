const {test,expect} =  require('@playwright/test'); //from node modules and two packages 

test("Mousedragdrop",async ({page}) => {

  await page.goto("https://testautomationpractice.blogspot.com/"); 
  
})