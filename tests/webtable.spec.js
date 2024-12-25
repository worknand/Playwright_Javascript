const {test,expect} =  require('@playwright/test'); //from node modules and two packages 
const exp = require('constants');

test("webtable",async ({page}) => {

  await page.goto("https://testautomationpractice.blogspot.com/"); 

  const table=await page.locator('#productTable');

  // total no of row and column

  const columns=await page.locator("//table[@id='productTable']//thead//th");
  console.log(await columns.count());
   expect(await columns.count()).toBe(4);

  const rows=await page.locator("//table[@id='productTable']//tbody//tr");
  console.log(await rows.count());
   expect( await rows.count()).toBe(5);

   //select particular row checkbox

 const matchedRow =  rows.filter({
    has: page.locator('td'),
    hasText: 'Smartwatch'
   })
  
  await matchedRow.locator('input').check();

//3.select multiple products by resuing functions
 await selectProduct(rows,page,'Smartphone');
 await selectProduct(rows,page,'Laptop');
 await selectProduct(rows,page,'Tablet ');
 await selectProduct(rows,page,'Wireless Earbuds');

 // print all product details using loop
 for (let index = 0; index <await rows.count(); index++) {
  const row=rows.nth(index);
  const tds= row.locator('td');

  for (let j = 0; j <await tds.count()-1; j++) {

  const data=  await tds.nth(j).textContent();
  console.log(data);
    
  }
}
  
  // read data drom all paginations
  const pages= await page.locator('#pagination a');
  const nofopages=await pages.count();
  console.log(nofopages);

  for (let p = 0; p < await pages.count(); p++) {
    await page.waitForTimeout(5000);
    if(p>0){
      await pages.nth(p).click();
    }
    for (let index = 0; index <await rows.count(); index++) {
      const row=rows.nth(index);
      const tds= row.locator('td');
    
      for (let j = 0; j <await tds.count()-1; j++) {
    
      const data=  await tds.nth(j).textContent();
      console.log(data);
        
      }
    }
  }
  


  
  });

  async function selectProduct(rows,page,productname){
 const matchedRow =  rows.filter({
    has: page.locator('td'),
    hasText: productname
   })
  
   await matchedRow.locator('input').check();
  }