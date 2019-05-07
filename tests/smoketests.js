const expect = require('chai').expect;
const HomePage = require('../pages/homepage');
const homePage = new HomePage();
const InventoryPage = require('../pages/inventorypage');
const invPage = new InventoryPage();
const { addArgument } = require ('@wdio/allure-reporter').default;


describe('Sauce Swag smoketests ', function() {

    it("at homepage", function() {
        //addArgument('Device Name', browser.capabilities.testobject_device_name);
        expect(homePage.title_image.isExisting()).to.be.true;
    });

    it("logs in", function() {
        //addArgument('Device Name', browser.capabilities.testobject_device_name);
    	homePage.setUsername("standard_user");
    	homePage.setPassword("secret_sauce");
    	homePage.login();
    	expect(invPage.toggle.isExisting()).to.be.true;
    });

    it ("logs out", function() {
        //addArgument('Device Name', browser.capabilities.testobject_device_name);
        invPage.logout();
    	expect(homePage.getUsername().isExisting()).to.be.true;
    });

});