const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputEmail () {
        return $('[id="login-email"]');
    }

    get inputPassword () {
        return $('[id="current-password"]');
    }

    get btnLogin () {
        return $('[id="btn-login"]'); 
    }

    get accountBtn () {
        return $('[class="icon-user"]'); 
    }


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password 
     */
    async login (email, password) {
        await this.accountBtn.click();
        await browser.pause(40000)
        await this.inputEmail.click();
        await browser.pause(3000)
        await this.inputEmail.setValue(email);
        await browser.pause(3000)
        await this.inputPassword.setValue(password);
        await browser.pause(3000)
        await this.btnLogin.click();
        await browser.pause(3000)
    }

}

module.exports = new LoginPage();
