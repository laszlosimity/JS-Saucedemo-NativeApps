
const Page = require('./page');

class HomePage extends Page {

    get username() { return $("~test-Username"); };
    get password() { return $('~test-Password'); };
    get login_button() { return $('~test-LOGIN'); };
    get title_image() { return $('~assets/src/img/swag-labs-logo.png'); };

    get errorText() { return $('~test-Error message'); };

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