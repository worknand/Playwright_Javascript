const {test,expect, chromium} =  require('@playwright/test'); //from node modules and two packages 

// allure report
//npx playwright test --project=chromium --headed  tests/reporters.spec.js
//allure generate ./allure-results -o ./allure-report --clean
// allure open allure-report

test("reports1",async ({page}) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await expect(page).toHaveTitle('OrangeHRM');
})

test("reports2",async ({page}) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await expect(page).toHaveTitle('OrangeHRM');
})


test("reports3",async ({page}) => {
    await page.goto("https://demoblaze.com/");
    await expect(page).toHaveTitle('STORE');
})

test("reports4",async ({page}) => {
    await page.goto("https://demo.opencart.com/");
    await expect(page).toHaveTitle('Your Store');
})