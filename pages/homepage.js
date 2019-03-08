
const Page = require('./page');

class HomePage extends Page {

    get username() { return browser.element("~test-Username"); };
    get password() { return browser.element('~test-Password'); };
    get login_button() { return browser.element('~test-LOGIN'); };
    get title_image() { return browser.element('~assets/src/img/swag-labs-logo.png'); };

    get errorText() { return browser.element('~test-Error message'); };

    open() {
       browser.url("http://www.saucedemo.com/");
    };

    getUsername() {
        return this.username;
    }

    setUsername(theusername) {
        this.username.setValue(theusername);
    };

    setPassword(thepassword) {
        this.password.setValue(thepassword);
    };

    login() {
        this.login_button.click();
        
    };

    getErrorText() {
        return this.errorText.getText();
    };

};

module.exports = HomePage;