const {test,expect} =  require('@playwright/test'); //from node modules and two packages 

test.skip("page screenshot",async ({page}) => {

    await page.goto("https://naveenautomationlabs.com/opencart/"); 
    await page.screenshot({path:"./screenshots/"+Date.now()+"homepage.png"});
  
  })

  test.skip("fullpage screenshot",async ({page}) => {

    await page.goto("https://naveenautomationlabs.com/opencart/"); 
    await page.screenshot({path:"./screenshots/"+Date.now()+"fullpage.png",fullPage:true});
  })


  test("element screenshot",async ({page}) => {

    await page.goto("https://naveenautomationlabs.com/opencart/"); 
    
    await page.locator(".product-thumb.transition [title='iPhone']").screenshot({path:"./screenshots/"+Date.now()+"elementpage.png"});

  })