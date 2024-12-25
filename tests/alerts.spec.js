const {test,expect} =  require('@playwright/test'); //from node modules and two packages 

test.skip("Alert",async ({page}) => {

  await page.goto("https://testautomationpractice.blogspot.com/"); 

  // enabling alert handler
  page.on('dialog',async dialog =>{

    expect(dialog.type()).toContain('alert');
    expect(dialog.message()).toContain('I am an alert box!');
    await dialog.accept();

  })

  await page.locator("//button[text()='Simple Alert']").click();

  await page.waitForTimeout(5000);

  })


  test.skip("Alert with ok and cancel ",async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/"); 
  
    // enabling alert handler
    page.on('dialog',async dialog =>{
  
      expect(dialog.type()).toContain('confirm');
      expect(dialog.message()).toContain('Press a button!');
      await page.waitForTimeout(5000);
      await dialog.accept();
    //  await dialog.dismiss();
  
    })
  
    await page.locator("//button[text()='Confirmation Alert']").click();
    const mesg=await page.locator("#demo");
    await expect(mesg).toHaveText('You pressed OK!');
    // await expect(mesg).toHaveText('You pressed Cancel!');
    
  
    })


    test("Prompt",async ({page}) => {

      await page.goto("https://testautomationpractice.blogspot.com/"); 
    
      // enabling alert handler
      page.on('dialog',async dialog =>{
    
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain('Please enter your name:');
        expect(dialog.defaultValue()).toContain('Harry Potter');
        await page.waitForTimeout(5000);
        // await dialog.accept('Nanda');
      await dialog.dismiss('Nanda');
      })
    
      await page.locator("//button[text()='Prompt Alert']").click();
      const mesg=await page.locator("#demo");
      // await expect(mesg).toHaveText('Hello Nanda! How are you today?');
       await expect(mesg).toHaveText('User cancelled the prompt.');
    
    
      })