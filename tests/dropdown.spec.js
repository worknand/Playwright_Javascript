const {test,expect} =  require('@playwright/test'); //from node modules and two packages 

test("dropdown",async ({page}) => {
  await page.goto("https://testautomationpractice.blogspot.com/");


  // multiple ways to select dropdown options

//   await page.locator("#country").selectOption({label: 'India'}); // label or visibletext
//   await page.locator("#country").selectOption('India'); // visibletext
//   await page.locator("#country").selectOption({value: 'uk'}); // value
//   await page.locator("#country").selectOption({index: 9}); //index
// await page.selectOption('#country','India');

// assertions
// 1.check no of options in dropdown - approach 1

// const options=await page.locator('#country option');
// await expect(options).toHaveCount(10);

//2.check no of option in dropdown =approach 2

// const options=await page.$$('#country option');
// console.log(options.length);
// await expect(options.length).toBe(10);

//3.check presence of values in dropdown = approach 1

// const textOptions=await page.locator('#country').textContent();
// console.log(textOptions.length);
// await expect(textOptions.includes('India')).toBeTruthy();


// 4.check presence of values in dropdown = approach 2 using loops
const optionsArray=await page.$$('#country option');
let status=false;

// Looping through all options to check for 'India'
for (let i = 0; i < optionsArray.length; i++) {
    const optionText = await optionsArray[i].textContent();
    if (optionText.includes('India')) {
        status = true;
      break;
    }
  }

  // Assert that India is found in the dropdown
  await expect(status).toBeTruthy();



  });