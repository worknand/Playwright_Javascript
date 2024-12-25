const {test,expect} =  require('@playwright/test'); //from node modules and two packages 
const exp = require('constants');

test("single file",async ({page}) => {

//   await page.goto("https://the-internet.herokuapp.com/upload"); 
//   await page.locator("#file-upload").click();
//   await page.locator("#file-upload").setInputFiles("tests/uploadFiles/cardmail.jpg");
//   await page.waitForTimeout(5000);
//    await page.locator("#file-submit").click();
//    await page.waitForTimeout(5000);

await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php"); 
await page.locator("#filesToUpload").click();
await page.waitForTimeout(5000);
await page.locator("#filesToUpload").setInputFiles('tests/uploadFiles/cardmail.jpg');
  await page.waitForTimeout(5000);

})


test.only("multiple file",async ({page}) => {

    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php"); 

    await page.locator("#filesToUpload").click();

    await page.locator("#filesToUpload").setInputFiles(['tests/uploadFiles/cardmail.jpg','tests/uploadFiles/LTF_Conversion_request.pdf']);
    

    expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('cardmail.jpg');
    expect(await page.locator('#fileList li:nth-child(2)')).toHaveText('LTF_Conversion_request.pdf');
  
    await page.waitForTimeout(5000);
// remove files
    await page.locator("#filesToUpload").setInputFiles([]);

    await page.waitForTimeout(5000);

    expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('No Files Selected');
  })