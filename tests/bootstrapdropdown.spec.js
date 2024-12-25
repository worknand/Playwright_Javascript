const {test,expect} =  require('@playwright/test'); //from node modules and two packages 

test("Multiselect Dropdown",async ({page}) => {
  await page.goto("https://www.jquery-az.com/boots/demo.php?ex=63.0_2");  

  await page.locator("//button[@class='multiselect dropdown-toggle btn btn-default']").click();

  

  const options1= await page.locator("//ul//li//input");
  console.log(options1.length);  // undefined
  await expect(options1).toHaveCount(11);

  const options=await page.$$('//ul//li//input');
 console.log(options.length); //11
 await expect(options.length).toBe(11);


 // print all options
 const options2=await page.$$('//ul//li//label');
 for(let opt of options2){
 const texts= await opt.textContent();
 console.log(texts);
 
 }

 // select all checkbox
 const options3=await page.$$('//ul//li//input');
 for(let opt1 of options3){
  await opt1.click();
 }

 await page.waitForTimeout(5000);
  // if select tag not present in dropdown then it maybe a bootstrapdrop dropdown 

  })