
const Page = require('./page');

class InventoryPage extends Page {

    get toggle() {
        return $('~test-Toggle');
    };

    get menuButton() {
        return $('~test-Menu');
        ////XCUIElementTypeOther[@name="test-Menu"]/XCUIElementTypeOther
        //
    };

    get logoutLink() {
        return $('~test-LOGOUT');
    };

    get bikelightItem() {
        return $('//XCUIElementTypeStaticText[contains(@value,"Sauce Labs Bike Light")]//ancestor::*[@name="test-Item"]');
    };

    bikelightAdd() {
        $('//XCUIElementTypeStaticText[contains(@value,"Sauce Labs Bike Light")]//ancestor::*[@name="test-Item"]').$(`~test-ADD TO CART`).click();
    }

    get cart() {
        return $('~test-Cart');
    };

    get onCartPage() {
        return $('~test-Cart Content').getAttribute('label');
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