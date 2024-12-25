const {test,expect} =  require('@playwright/test'); //from node modules and two packages 

test("Autosuggest Dropdown",async ({page}) => {

  await page.goto("https://www.redbus.in"); 
   
  await page.locator('#src').fill('Chennai');
  await page.waitForSelector("//div//text[@class='placeHolderMainText']");
  const options=await page.$$("//div//text[@class='placeHolderMainText']");
  console.log(options.length);

  for(let opt of options){
    const texts= await opt.textContent();
    console.log(texts);
    if (texts.includes('Sholinganallur')){
        await opt.click();
        break;
    }
  }
  await page.waitForTimeout(5000);
})