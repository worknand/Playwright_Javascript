const {test,expect} =  require('@playwright/test'); //from node modules and two packages 
const exp = require('constants');

test("Keyboard",async ({page}) => {

  await page.goto("https://gotranscript.com/text-compare"); 

 const src= await page.getByPlaceholder('Paste one version of the text here.');
 await src.fill('Hello');
 // ctrl+A
  await page.keyboard.press('Control+A');

  //ctrl+C
  await page.keyboard.press('Control+C');

  //tab
//   await page.keyboard.down('Tab');
//   await page.keyboard.up('Tab');

 const dest= await page.getByPlaceholder('Paste another version of the text here.');
 await dest.click();
    await page.keyboard.press('Control+V');

    await page.waitForTimeout(5000);

})