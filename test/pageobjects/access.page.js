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

    get xxxlSize () {
        return $('[data-locator-id="pdp-size-3xl-select"]');
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
        return $('[data-locator-id="plp-productTitle-6805200928970-read"]');
    }

    get thirdProduct () {
        return $('[data-locator-id="plp-productTitle-6805432369354-read"]');
    }

    get accessoriesHeader () {
        return $('[id="accessories"]')
    }
    
    get crewSocks () {
        return $('[data-locator-id="plp-productTitle-6805085159626-read"]')
    }
    
    get womenHeader () {
        return $('[id="women"]')
    }

    
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password 
     */
    async login (email, password) {
        await this.accountBtn.click();
        await this.loginHeaderBtn.click();
        await this.inputEmail.waitForClickable();
        await this.inputEmail.moveTo();
        await this.inputEmail.click();
        await this.inputEmail.setValue(email);
        await this.inputPassword.click();
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
        await browser.pause(2000)

    }

    async dismissPopup () {
        if (await this.entirePopup.isExisting()) {
            await this.quitPopup.moveTo();
            await this.quitPopup.click();
            await expect(this.quitPopup).not.toBeExisting()
        }
    }

    async secondItem() {
        await this.womenHeader.waitForClickable();
        await this.womenHeader.click();
        await this.shopBtn.waitForClickable();
        await this.shopBtn.click();
        await this.nextProduct.waitForClickable();
        await this.nextProduct.click();
        await this.dismissPopup();
        await this.xsSize.waitForClickable();
        await this.xsSize.click();
        await this.dismissPopup();
        await browser.pause(500)
        await this.addBag.waitForClickable();
        await this.addBag.click();
        await this.dismissPopup();
        await this.closeCart.waitForClickable();
        await this.closeCart.click();
        await browser.pause(500)
        await this.dismissPopup();
        await this.xlSize.waitForClickable();
        await this.xlSize.click();
        await browser.pause(500)
        await this.addBag.waitForClickable();
        await this.addBag.click();
        await this.closeCart.waitForClickable();
        await this.closeCart.click();
        await browser.pause(500)
        await this.xxlSize.waitForClickable();
        await this.xxlSize.click();
        await browser.pause(500)
        await this.addBag.waitForClickable();
        await this.addBag.click();
        await this.closeCart.waitForClickable();
        await this.closeCart.click();
    }
    async thirdItem () {
        await this.btnMen.waitForClickable();
        await this.btnMen.click();
        await this.accessoriesHeader.waitForClickable();
        await this.accessoriesHeader.click();
        await this.thirdProduct.click();
        await this.dismissPopup();
        await this.addBag.waitForClickable();
        await this.addBag.click();
        await this.closeCart.waitForClickable();
        await this.closeCart.click();
    }
    async firstItem() {
        await this.btnMen.waitForClickable();
        await this.btnMen.click();
        await this.shopBtn.waitForClickable();
        await this.shopBtn.click();
        await this.eliteShirt.waitForClickable();
        await this.eliteShirt.click();
        await browser.pause(500)
        await this.dismissPopup();
        await this.sSize.moveTo();
        await this.sSize.waitForClickable();
        await this.sSize.click();
        await this.dismissPopup();
        await this.addBag.waitForClickable();
        await this.addBag.click();
        await this.closeCart.waitForClickable();
        await this.closeCart.click();
        await browser.pause(500)
        await this.xlSize.moveTo();
        await this.xlSize.waitForClickable();
        await this.xlSize.click();
        await this.addBag.click();
        await this.closeCart.waitForClickable();
        await this.closeCart.click();
        await browser.pause(500)
        await this.xxlSize.moveTo();
        await this.xxlSize.waitForClickable();
        await this.xxlSize.click();
        await this.addBag.click();
        await this.closeCart.waitForClickable();
        await this.closeCart.click();
    } 
    async fourthItem() {
        await this.accessoriesHeader.waitForClickable();
        await this.accessoriesHeader.click();
        await this.crewSocks.click();
        await browser.pause(500)
        await this.dismissPopup();
        await this.sSize.waitForClickable();
        await this.sSize.click();
        await browser.pause(500)
        await this.dismissPopup();
        await this.addBag.waitForClickable();
        await this.addBag.click();
        await this.dismissPopup();
        await this.closeCart.waitForClickable();
        await this.closeCart.click();
        await browser.pause(500)
        await this.mSize.waitForClickable();
        await this.mSize.click();
        await browser.pause(500)
        await this.addBag.waitForClickable();
        await this.addBag.click();
        await this.closeCart.waitForClickable();
        await this.closeCart.click();
        await browser.pause(500)
        await this.lSize.waitForClickable();
        await this.lSize.click();
        await browser.pause(500)
        await this.addBag.waitForClickable();
        await this.addBag.click();
        await this.closeCart.waitForClickable();
        await this.closeCart.click();
    }
}

module.exports = new LoginPage();
