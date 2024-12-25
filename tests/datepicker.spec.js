const {test,expect} =  require('@playwright/test'); //from node modules and two packages 

test("DatePicker",async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/"); 

    // await page.locator("//input[@id='datepicker']").fill('12/05/2024');

    // date DatePicker

    const year="2024";
    const month="December";
    const date="20";

    await page.locator("//input[@id='datepicker']").click();

    while(true){
      const currentmonth=  await page.locator('.ui-datepicker-month').textContent();
      const currentyear=  await page.locator('.ui-datepicker-year').textContent();

      if(currentyear == year && currentmonth == month){
        break;
      } 

    //   if(currentyear < year){
    //    const prev=   await page.locator("//a[@title='Prev']");
    //    const next=   await page.locator("//a[@title='Next']");
    //    }
    }
  const dates=  await page.$$("//table[@class='ui-datepicker-calendar']//tbody//td//a");
  for(const datelist of dates){
  const textDate= await  datelist.textContent();
    if(textDate == date){
      await datelist.click();
    }
  }
        await page.waitForTimeout(5000);



})