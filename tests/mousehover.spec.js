const {test,expect} =  require('@playwright/test'); //from node modules and two packages 

test("Mousehover",async ({page}) => {

  await page.goto("https://naveenautomationlabs.com/opencart/"); 

 const desktop= await page.locator("//a[text()='Desktops']");
 const mac= await page.locator("//a[text()='Mac (1)']");

 //mouse hover
 await desktop.hover();
 await mac.hover();

 await page.waitForTimeout(5000);



})