const {test,expect, chromium} =  require('@playwright/test'); //from node modules and two packages 

test("multiplepages/windows",async () => {


   const browser= await chromium.launch();
  const browserContext= await browser.newContext();
 const page1= await browserContext.newPage();
 const page2= await browserContext.newPage();

 const allPages=await browserContext.pages();
 console.log(await allPages.length);

 await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
 await expect(page1).toHaveTitle('OrangeHRM');

 
 await page2.goto("https://www.orangehrm.com/");
 await expect(page2).toHaveTitle('Human Resources Management Software | OrangeHRM');
 

})

test.only("multiplepages/windows1",async () => {


    const browser= await chromium.launch();
   const browserContext= await browser.newContext();
  const page1= await browserContext.newPage();
  const page2= await browserContext.newPage();
 
  const allPages=await browserContext.pages();
  console.log(await allPages.length);
 
  await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  await expect(page1).toHaveTitle('OrangeHRM');

  const pagePromise= browserContext.waitForEvent('page');
  await page1.locator("//a [.='OrangeHRM, Inc']").click();

   const newPage = await pagePromise;
   await expect(newPage).toHaveTitle('Human Resources Management Software | OrangeHRM');
  
 
 })