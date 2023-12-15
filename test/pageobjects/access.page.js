const { $ } = require('@wdio/globals')
const Page = require('./URL.js');

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
    get btnMen () {
        return $('[id="men"]'); 
    }

    get shopBtn () {
        return $('[class="button_button__6GmNk button_button--primary__bByrP"]');
    }
    
    get emailField () {
        return $('[type="email"]');
    }

    get eliteShirt () {
        return $('[class="product-card_product-title__9gis1"]');
    }

    get xsSize () {
        return $('[data-locator-id="pdp-size-xs-select"]');
    }

    get sSize () {
        return $('[data-locator-id="pdp-size-s-select"]');
    }

    get mSize () {
        return $('[data-locator-id="pdp-size-m-select"]');
    }

    get lSize () {
        return $('[data-locator-id="pdp-size-l-select"]');
    }
    
    get xlSize () {
        return $('[data-locator-id="pdp-size-xl-select"]');
    }
    
    get xxlSize () {
        return $('[data-locator-id="pdp-size-xxl-select"]');
    }

    get addBag () {
        return $('[data-locator-id="pdp-addToBag-submit"]');
    }    
    
    get closeCart () {
        return $('[class="mini-cart_closeCart__Pkgn4"]');
    }    
    
    get loginHeaderBtn () {
        return $('[id="tab-1"]');
    }   
    
    get signupBtn () {
        return $('[id="tab-2"]');
    }   

    get quitPopup () {
        return $('[id="dismissbutton2header1"]');
    }

    get entirePopup () {
        return $('[class="css-1gg9zic"]');
    }

    get nextProduct () {
        return $('[data-locator-id="plp-productTitle-6805257093322-read"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password 
     */
    async login (email, password) {
        await this.accountBtn.click();
        await this.signupBtn.click();
        await this.loginHeaderBtn.click();
        await this.inputEmail.waitForClickable();
        await this.inputEmail.moveTo();
        await this.inputEmail.click();
        await this.inputEmail.setValue(email);
        await this.inputPassword.click();
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
        await this.btnMen.waitForClickable();
        await this.btnMen.click();
        await this.shopBtn.waitForClickable();
        await this.shopBtn.click();
        await this.eliteShirt.waitForClickable();
        await this.eliteShirt.click();
        await this.xsSize.click();
        await this.addBag.waitForClickable();
        await this.addBag.click();
        await this.closeCart.waitForClickable();
        await this.closeCart.click();
        await browser.pause(1000)
        await this.sSize.waitForClickable();
        await this.sSize.click();
        await this.addBag.click();
        await this.closeCart.waitForClickable();
        await this.closeCart.click();
        await this.mSize.waitForClickable();
        await this.mSize.click();
        await this.addBag.click();
        await this.closeCart.waitForClickable();
        await this.closeCart.click();
        await this.lSize.waitForClickable();
        await this.lSize.click();
        await this.addBag.click();
        await this.closeCart.waitForClickable();
        await this.closeCart.click();
        await this.xlSize.waitForClickable();
        await this.xlSize.click();
        await this.addBag.click();
        await this.closeCart.waitForClickable();
        await this.closeCart.click();
        await this.xxlSize.waitForClickable();
        await this.xxlSize.click();
        await this.addBag.click();
        await this.closeCart.waitForClickable();
        await this.closeCart.click();
        await this.nextProduct.click();
        await browser.pause(2000)
    }

    async dismissPopup () {
        if (await this.entirePopup.isExisting()) {
            await this.quitPopup.moveTo();
            await this.quitPopup.click();
            await expect(this.quitPopup).not.toBeExisting()
        }
    }
}


module.exports = new LoginPage();
