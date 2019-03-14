const expect = require('chai').expect;
const HomePage = require('../pages/homepage');
const homePage = new HomePage();
const InventoryPage = require('../pages/inventorypage');
const invPage = new InventoryPage();
const CartPage = require('../pages/cartpage');
const cartPage = new CartPage();
const CartContent = require('../pages/cart');
const newCartContent = new CartContent();
const checkoutPageOne = require('../pages/checkoutPageOne');
const theCheckoutPageOne = new checkoutPageOne();

describe('Sauce Swag purchase flow ', function() {

    it("loads the homepage", function() {
        expect(homePage.title_image.isExisting()).to.be.true;
    });

    it("logs in with credentials", function() {
        homePage.setUsername("standard_user");
        homePage.setPassword("secret_sauce");
        homePage.login();
        expect(invPage.toggle.isExisting()).to.be.true;
    });

    it("adds an item to the cart", function() {
        invPage.addToCart();
        expect(invPage.getCartItemsCount()).to.equal('1');
    });

    it ("clicks cart icon", function() {
        invPage.clickCart();
        expect(cartPage.onCartPage).to.not.be.null;
    });

    it ("clicks checkout", function() {
        newCartContent.goToCheckout();
    });

    it ("enters checkout information", function() {

        theCheckoutPageOne.submitPersonalInfo({firstName: 'laszlo', lastName: 'simity', zip: '90210'});
    });

    it ("checksout", function() {
        homePage.annotate(this.test.title);
        cartPage.clickCheckoutContinue();
        expect(cartPage.getHeaderElText()).to.equal('Checkout: Complete!');
    });
    

    it ("logs out", function() {
        invPage.logout();
        expect(homePage.getUsername().isExisting()).to.be.true;
    });

});