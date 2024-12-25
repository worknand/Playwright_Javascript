const {test,expect} =  require('@playwright/test'); //from node modules and two packages 

test("MouseRightclick",async ({page}) => {

  await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html"); 

 const button = await page.locator("//span[text()='right click me']");

 //rigtht click
 await button.click({button: "right"});

 await page.waitForTimeout(5000);
})