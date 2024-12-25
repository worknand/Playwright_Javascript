const {test,expect} =  require('@playwright/test'); //from node modules and two packages 

test("Iframes",async ({page}) => {

  await page.goto("https://ui.vision/demo/webtest/frames/"); 

  const frame3 = await page.frame({url: "https://ui.vision/demo/webtest/frames/frame_3.html"});

  //nester frames
  const childframes= await frame3.childFrames();
  console.log(childframes.length);
  childframes[0].locator("#i6").check();

  await page.waitForTimeout(5000);
  




  })