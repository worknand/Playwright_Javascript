exports.HomePage = class HomePage {
   
    constructor(page) {
      this.page = page;
      this.productList= '//*[@id="tbodyid"]/div/div/div/h4/a';
      this.addToCartbtn='//a[normalize-space()="Add to cart"]';
      this.cart='#cartur'
     }

 
    async addProductToCart(productName) {
        const productList = await this.page.$$(this.productList);
         for (const product of productList) {
             if (productName === await product.textContent()) {
            const name=  await product.textContent();
            console.log(name);
            await product.scrollIntoViewIfNeeded();
            await this.page.locator(`//a[normalize-space()='${name}']`).click();
                // await product.click();
                break;
                }
           }
          await this.page.on('dialog', async dialog=>{
            if(dialog.message().includes('added')){
            await dialog.accept(); 
           }
          })
          await this.page.locator(this.addToCartbtn).click(); 
    }

    async gotoCart() {
        await this.page.locator(this.cart).click();
       }

}