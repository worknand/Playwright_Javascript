//const {test,expect}=require('@playwright/test'); // to import test and validation(expect) from playwright
import {test,expect} from '@playwright/test'; //another way of import


//npx playwright test --project=chromium --headed  locators.spec.js
test('Locatore', async ({page}) => {
     
    await page.goto("https://demoblaze.com/");
    //nandynanda
    //nanda1234
    // await page.locator('locator').click(); // one approch
    // await page.click('locator');
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('nandynanda');
    await page.locator('#loginpassword').fill('nanda1234');
    await page.locator("//button[text()='Log in']").click();

    //verify
   const logOut= page.locator('#logout2');
   await expect(logOut).toBeVisible();

  // locating multiple web elements

  page.waitForSelector("//div[@id='tbodyid']//a[@class='hrefch']"); // optional to wait for elements
  const multiWebelements= await page.$$("//a");
  for (let index = 0; index < multiWebelements.length; index++) {
 const linktext=   await multiWebelements[index].textContent();
 console.log(linktext);
   
  }

   await page.close();

})