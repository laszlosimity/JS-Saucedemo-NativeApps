const expect = require('chai').expect;
const HomePage = require('../pages/homepage');
const homePage = new HomePage();
const InventoryPage = require('../pages/inventorypage');
const invPage = new InventoryPage();

describe('Sauce Swag login page ', function() {

    it("loads the homepage", function() {
        expect(homePage.title_image.isExisting()).to.be.true;
    });

    it("does not allow login without a username and password", function() {
        homePage.login();
        expect(homePage.getErrorText()).to.equal("Username is required");
    });

    it("does not accept an empty password", function() {
    	homePage.setUsername("standard_user");
    	homePage.login();
    	expect(homePage.getErrorText()).to.equal("Password is required");
    });

    it("does not accept an empty username", function() {
        homePage.setUsername("");
        homePage.setPassword("secret_sauce");
        homePage.login();
        expect(homePage.getErrorText()).to.equal("Username is required");
    });

    it("allows login with credentials", function() {
        homePage.setUsername("standard_user");
        homePage.setPassword("secret_sauce");
        homePage.login();
        expect(invPage.toggle.isExisting()).to.be.true;
    });

});