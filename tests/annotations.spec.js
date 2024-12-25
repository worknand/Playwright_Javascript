const {test,expect} =  require('@playwright/test'); //from node modules and two packages 
const { skip } = require('node:test');

//only
//skip
//fixme
  //fail

//only
// test.only("test1",async ({ page }) => {

//     console.log("this is my test1");
  
//   })


//skip
//   test.skip("test2",async ({ page }) => {

//     console.log("this is my test2");
  
//   })
// //another way to skip
//   test.skip("test3",async ({ page }) => {

//     console.log("this is my test3");
//   if(browserName === "chromium"){
//     test.skip();
//   }
// });

//fixme -whenever ther is bus in script so we can mention as fix me
  test("test4",async ({ page }) => {
     test.fixme();
    console.log("this is my test4");
  
  })


  //fail  //Expected to fail, but passed.

//   test("test5",async ({ page }) => {
//     test.fail();//expected to fail
//    console.log("this is my test5");
//    expect(1).toBe(2); // actual // may be used for negative testing if both exp and actual are same then it will fail
 
//  })
// for fail with condition
//    test("test6",async ({ page }) => {
//     console.log("this is my test6");
//     if(browserName === "chromium"){
//              test.fail();
//     }
// })

//test7 slow() //marking test as slow
// Test timeout of 5000ms exceeded. and have to make changes in config file by setting timeout
test("Addproduct Test",async ({page}) => {

    await page.goto("https://demoblaze.com/"); 
//login
await page.locator('#login2').click();
await page.locator('#loginusername').fill('nandynanda');
await page.locator('#loginpassword').fill('nanda1234');
await page.locator("//button[text()='Log in']").click();

//addtoCart
await page.locator("//a[text()='Samsung galaxy s6']").click();

await page.locator("//a[text()='Add to cart']").click();

page.on('dialog', async dialog => {
    
     await  expect(dialog.message()).toBe('Product added.');
     console.log(dialog.message());
    await dialog.accept();
  });


//logout
const logOut= page.locator('#logout2');
await expect(logOut).toBeVisible();
await page.locator('#logout2').click();


    
})
    