const {test,expect} =  require('@playwright/test'); //from node modules and two packages 

test("Homepage Test",async ({page}) => {

  await page.goto("https://demoblaze.com/"); 

// beforeEach: This hook is executed before each individual test.
// afterEach: This hook is executed after each individual test.
// beforeAll: This hook is executed once before any of the tests start running.
// afterAll: This hook is executed once after all the tests have been run.

//login
await page.locator('#login2').click();
await page.locator('#loginusername').fill('nandynanda');
await page.locator('#loginpassword').fill('nanda1234');
await page.locator("//button[text()='Log in']").click();

//homepage

page.waitForSelector("//div[@id='tbodyid']//a[@class='hrefch']");
const products=await page.$$("//div[@id='tbodyid']//a[@class='hrefch']");
expect(products).toHaveLength(9);

//logout
const logOut= page.locator('#logout2');
await expect(logOut).toBeVisible();
await page.locator('#logout2').click();

})


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