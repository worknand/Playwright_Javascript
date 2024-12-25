const {test,expect} =  require('@playwright/test'); //from node modules and two packages 
import {LoginPage} from '../pages/LoginPage';
import {HomePage} from '../pages/HomePage';
import {CartPage} from '../pages/CartPage';
import exp from 'constants';

test("POM Test",async ({page}) => {


    //login
const login=new LoginPage(page);
await login.gotoLoginPage();
await login.login("nandynanda","nanda1234");

//HomePage
const home=new HomePage(page);
await home.addProductToCart("Nokia lumia 1520");
await page.waitForTimeout(5000);
await home.gotoCart();

//CartPage
const cart=new CartPage(page);
await page.waitForTimeout(5000);
const result=await cart.checkProductInCart("Nokia lumia 1520");
await expect(result).toBeTruthy();

});