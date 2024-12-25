// Playwright includes test assertions in the form of expect function.
// Reference: https://playwright.dev/docs/test-asse...


// 1) expect(page).toHaveURL()   Page has URL
// expect(page).not.toHaveURL() 
// 2) expect(page).toHaveTitle()   Page has title
// 3) expect(locator).toBeVisible()  Element is visible
// 4) expect(locator).toBeEnabled()  Control is enabled
// 5) expect(locator).toBeChecked()  Radio/Checkbox is checked
// 6) expect(locator).toHaveAttribute() Element has attribute
// 7) expect(locator).toHaveText()  Element matches text
    // 8) expect(locator).toContainText()  Element contains text
// 9) expect(locator).toHaveValue(value) Input has a value
// 10) expect(locator).toHaveCount()  List of elements has given length


const {test,expect} =  require('@playwright/test'); //from node modules and two packages 

test("Assertiontest",async ({page}) => {
  await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2F");

  // 1) expect(page).toHaveURL()   Page has URL
  await expect(page).toHaveURL('https://demo.nopcommerce.com/register?returnUrl=%2F');

  // 2) expect(page).toHaveTitle()   Page has title
  await expect(page).toHaveTitle('nopCommerce demo store. Register');

  // 3) expect(locator).toBeVisible()  Element is visible
   const logo= await page.locator("//img[@alt='nopCommerce demo store']");
  await expect(logo).toBeVisible();

  // 4) expect(locator).toBeEnabled()  Control is enabled
  const enableEle= await page.locator("input#small-searchterms");
  await expect(enableEle).toBeEnabled();

  // 5) expect(locator).toBeChecked()  Radio/Checkbox is checked
  const radio= await page.locator("input#gender-male");
  radio.click();
  await expect(radio).toBeChecked();

  const checkBox= await page.locator("input#Newsletter");
  await expect(checkBox).toBeChecked();

  // 6) expect(locator).toHaveAttribute() Element has attribute
  const register= await page.locator("#register-button");
  await expect(register).toHaveAttribute('type','submit');

  // 7) expect(locator).toHaveText()  Element matches text
  const registerHeading= await page.locator(".page-title h1");
  await expect(registerHeading).toHaveText('Register'); // complete text

   // 8) expect(locator).toContainText()  Element contains text
   const registerHeading1= await page.locator(".page-title h1");
  await expect(registerHeading1).toContainText('Reg'); // partial text

  // 9) expect(locator).toHaveValue(value) Input has a value
  const email= await page.locator("#Email");
  email.fill("Nanda");
  await expect(email).toHaveValue('Nanda');

  // 10) expect(locator).toHaveCount()  List of elements has given length
  const dropdownCount= await page.locator("//select[@name='DateOfBirthMonth']//option");
  await expect(dropdownCount).toHaveCount(13);
})