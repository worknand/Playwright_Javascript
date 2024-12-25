const {test,expect} =  require('@playwright/test'); //from node modules and two packages 


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


test.describe.skip("Smoke Test",() => {

  test("Grouping",async () => {

    console.log("this is my test1");
  
  })
  
  test("Grouping1",async () => {
  
      console.log("this is my test2");
    
    })

})

test.describe.only("regression Test",() => {

  test("Grouping2",async () => {

    console.log("this is my test3");
  
  })

  test("Grouping3",async () => {

    console.log("this is my test4");
  
  })

  test("Grouping4",async () => {

    console.log("this is my test5");
  
  })


})

  