
const Page = require('./page');

class InventoryPage extends Page {

    get toggle() {
        return browser.element('~test-Toggle');
    };

    get menuButton() {
        return browser.element('~test-Menu');
        ////XCUIElementTypeOther[@name="test-Menu"]/XCUIElementTypeOther
        //
    };

    get logoutLink() {
        return browser.element('~test-LOGOUT');
    };

    get bikelightItem() {
        return browser.element('//XCUIElementTypeStaticText[contains(@value,"Sauce Labs Bike Light")]//ancestor::*[@name="test-Item"]');
    };

    bikelightAdd() {
        browser.element('//XCUIElementTypeStaticText[contains(@value,"Sauce Labs Bike Light")]//ancestor::*[@name="test-Item"]').$(`~test-ADD TO CART`).click();
    }

    get cart() {
        return browser.element('~test-Cart');
    };

    get onCartPage() {
        return browser.element('~test-Cart Content').getAttribute('label');
    };

    getCartItemsCount() {
        var count = this.cart.getAttribute('label');
        return count;
    };

    clickCart() {
        this.cart.click();
    };

    addToCart() {
        this.bikelightAdd();
    };

    logout() {
        this.menuButton.click();
        this.logoutLink.waitForDisplayed;
        this.logoutLink.click();
    };

};

module.exports = InventoryPage;