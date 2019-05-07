const Page = require('./page');

class CartPage extends Page {

    get cartHeader() {
        return $('.subheader_label');
    }
    
    get checkOutContinueButton() {
        return $('.cart_checkout_link');
    }

    get firstNameText() {
        return $('.checkout-input:nth-child(1)');
    }

    get lastNameText() {
        return $('.checkout-input:nth-child(2)');
    }

    get zipCodeText() {
        return $('.checkout-input:nth-child(3)');
    }

    getHeaderElText() {
        return this.cartHeader.getText();
    }

    setFirstName(name) {
        this.firstNameText.setValue(name);
    }

    setLastName(name) {
        this.lastNameText.setValue(name);
    }

    setZipCode(zipcode) {
        this.zipCodeText.setValue(zipcode);
    }

    clickCheckoutContinue() {
        this.checkOutContinueButton.click();
    }

};

module.exports = CartPage;