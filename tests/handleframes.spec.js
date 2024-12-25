const {test,expect} =  require('@playwright/test'); //from node modules and two packages 

test("frames",async ({page}) => {

  await page.goto("https://ui.vision/demo/webtest/frames/"); 

  // total frames
  const allFrames=await page.frames();
  console.log(allFrames.length);

  //approach 1 using name or URL
//  await page.frame('name'); // by using name
//   const frame1= await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"});
//   await frame1.locator("//input[@name='mytext1']").fill('Nanda');

   //approach  using frame locator

 const framelocator=  await page.frameLocator("//frame[@src='frame_1.html']");
 await framelocator.locator("//input[@name='mytext1']").fill('Nanda');

  })