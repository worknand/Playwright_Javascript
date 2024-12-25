const {test,expect} =  require('@playwright/test'); //from node modules and two packages 

//  npx playwright test --project=chromium --headed --grep "@smoke"  tests/tags.spec.js
// npx playwright test --project=chromium --headed --grep "@sanity"  tests/tags.spec.js 
// npx playwright test --project=chromium --headed --grep "@reg"  tests/tags.spec.js
// npx playwright test --project=chromium --headed --grep "@sanity@reg"  tests/tags.spec.js

test.beforeAll(async () => {

    console.log("this is my before all");
  
  })
  
  test.afterAll(async () => {
  
    console.log("this is my after all");
  
  })
  
  test.beforeEach(async () => {
  
    console.log("this is my before each");
  
  })
  
  test.afterEach(async () => {
  
    console.log("this is my after each");
  
  })

  test("@smoketest1",async ({ page }) => {

    console.log("this is my test1");
  
  })

  test("test2@smoke",async ({ page }) => {

    console.log("this is my test2");
  
  })

  test("test3@reg",async ({ page }) => {

    console.log("this is my test3");
  
  })

  test("test4@reg",async ({ page }) => {

    console.log("this is my test4");
  
  })

  test("test5@sanity@reg",async ({ page }) => {

    console.log("this is my test5");
  
  })