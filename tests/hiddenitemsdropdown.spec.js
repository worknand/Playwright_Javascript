const {test,expect} =  require('@playwright/test'); //from node modules and two packages 

test("Autosuggest Dropdown",async ({page}) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.getByPlaceholder('Username').fill('Admin');

    await page.getByPlaceholder('Password').fill('admin123');
  
    // page.getByRole() to locate by explicit and implicit accessibility attributes.
  
    await page.getByRole('button', {type: 'submit'}).click();

    await page.locator("//li//a//*[text()='PIM']").click();

//     There is another way to inspect elements in the hidden dropdown by following these steps 
// 1- Open developer tool.
// 2- From the right panel, go to ‘Event Listeners’ tab.
// 2- Look for ‘blur’ property.
// 3- Click on ‘Remove’ button next each property values to remove it.
// 4- Try to inspect the drop-down values again.

await page.locator("//label[text()='Employment Status']//..//..//i").click();

    await page.waitForTimeout(5000);

})