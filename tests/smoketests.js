const expect = require('chai').expect;
const HomePage = require('../pages/homepage');
const homePage = new HomePage();
const InventoryPage = require('../pages/inventorypage');
const invPage = new InventoryPage();

describe('Sauce Swag smoketests ', function() {

    it("at homepage", function() {
        expect(homePage.title_image.isExisting()).to.be.true;
    });

    it("logs in", function() {
    	homePage.setUsername("standard_user");
    	homePage.setPassword("secret_sauce");
    	homePage.login();
    	expect(invPage.toggle.isExisting()).to.be.true;
    });

    it ("logs out", function() {
    	invPage.logout();
    	expect(homePage.getUsername().isExisting()).to.be.true;
    });

});