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

    allSizes (size) {
        return $(`[data-locator-id="pdp-size-${size}-select"]`)
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
    
    get sharkBackpack () {
        return $('[data-locator-id="plp-productTitle-6805429747914-read"]'); 
    }
    
    get womenHeader () {
        return $('[id="women"]')
    }

    get cartBtn () {
        return $('[class="icon-bag"]')
    }
   
    get removeCart () {
        return $('[class="icon-delete"]')
    } 

    get loggingOut () {
        return $('[data-locator-id="account-logoutButton-select"]')
    } 

    get gymsharkLogo () {
        return $('[data-locator-id="header-logo-select"]') 
    } 

    get overlayCart () {
        return $('[class="button_icon__3NG7W button_icon--hide__jxmxP"]')
    }

    get selectedxl () {
        return $('[class="size_size__zRXlq size_size--selected__d_Onj"]')
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password 
     */
    async loginandlogout (email, password) {
        await this.accountBtn.click();
        await this.loginHeaderBtn.click();
        await this.inputEmail.waitForClickable();
        await this.inputEmail.moveTo();
        await this.inputEmail.click();
        await this.inputEmail.setValue(email);
        await this.inputPassword.click();
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
        await this.loggingOut.click();

    }


    async secondItem() {
        await browser.setCookies([
            {name:'__Secure-3PSIDCC',value: 'ABTWhQH5KNLGshr81A5fdgtuh7aZRouH8a8nqJoye6o_x0rvBRXQ1aKiKaStccDiAHFKHj5byK0',},
            {name:'__Secure-3PSIDTS',value:'sidts-CjIBPVxjSoOgXYhoLZue0vh3-3qqKFT0tuv8kYINuzimRsYuoiRoOphUQoOcZO1wzr8zqxAA'},
        ]);
        await browser.refresh()
        await this.womenHeader.waitForClickable();
        await this.womenHeader.click();
        await this.shopBtn.waitForClickable();
        await this.shopBtn.click();
        await this.nextProduct.waitForClickable();
        await this.nextProduct.click();
        await this.xsSize.waitForClickable();
        await this.xsSize.click();
        await this.addBag.waitForClickable();
        await this.addBag.click();
        await this.closeCart.waitForClickable();
        await this.closeCart.click();
        await this.xlSize.waitForExist();
        await this.xlSize.waitForClickable();
        await this.selectedxl.waitForExist();
        await this.xlSize.click();
        await this.xlSize.waitForClickable();
        await this.xlSize.click();
        await this.selectedxl.waitForExist();
        await this.addBag.waitForClickable();
        await this.addBag.moveTo();
        await this.addBag.click();
        await this.closeCart.waitForClickable();
        await this.closeCart.click();
        await this.xxlSize.waitForClickable();
        await this.xxlSize.click();
        await this.addBag.waitForClickable();
        await this.addBag.click();
        await this.closeCart.waitForClickable();
        await this.closeCart.click();
    }
    async thirdItem () {
        await browser.setCookies([
            {name:'__Secure-3PSIDCC',value: 'ABTWhQH5KNLGshr81A5fdgtuh7aZRouH8a8nqJoye6o_x0rvBRXQ1aKiKaStccDiAHFKHj5byK0',},
            {name:'__Secure-3PSIDTS',value:'sidts-CjIBPVxjSoOgXYhoLZue0vh3-3qqKFT0tuv8kYINuzimRsYuoiRoOphUQoOcZO1wzr8zqxAA'},
        ]);
        await browser.refresh()
        await this.btnMen.waitForClickable();
        await this.btnMen.click();
        await this.accessoriesHeader.waitForClickable();
        await this.accessoriesHeader.click();
        await this.thirdProduct.waitForClickable();
        await this.thirdProduct.click();
        await this.addBag.waitForClickable();
        await this.addBag.click();
        await this.closeCart.waitForClickable();
        await this.closeCart.click();
    }
    async firstItem() {
          await browser.setCookies([
            {name:'__Secure-3PSIDCC',value: 'ABTWhQH5KNLGshr81A5fdgtuh7aZRouH8a8nqJoye6o_x0rvBRXQ1aKiKaStccDiAHFKHj5byK0',},
            {name:'__Secure-3PSIDTS',value:'sidts-CjIBPVxjSoOgXYhoLZue0vh3-3qqKFT0tuv8kYINuzimRsYuoiRoOphUQoOcZO1wzr8zqxAA'},
        ]);
        await browser.refresh()
        await this.btnMen.waitForClickable();
        await this.btnMen.click();
        await this.shopBtn.waitForClickable();
        await this.shopBtn.click();
        await this.eliteShirt.waitForClickable();
        await this.eliteShirt.click();
        await this.allSizes('xs').moveTo();
        await this.sSize.waitForClickable();
        await this.allSizes('xs').click();
        await this.addBag.waitForClickable();
        await this.addBag.click();
        await this.closeCart.waitForClickable();
        await this.closeCart.click();
        await this.allSizes('s').moveTo();
        await this.sSize.waitForClickable();
        await this.allSizes('s').click();
        await this.addBag.waitForClickable();
        await this.addBag.click();
        await this.closeCart.waitForClickable();
        await this.closeCart.click();
        await this.allSizes('m').moveTo();
        await this.sSize.waitForClickable();
        await this.allSizes('m').click();
        await this.addBag.waitForClickable();
        await this.addBag.click();
        await this.closeCart.waitForClickable();
        await this.closeCart.click();
        await this.allSizes('l').moveTo();
        await this.sSize.waitForClickable();
        await this.allSizes('l').click();
        await this.addBag.waitForClickable();
        await this.addBag.click();
        await this.closeCart.waitForClickable();
        await this.closeCart.click();
        await this.xlSize.moveTo();
        await this.xlSize.waitForClickable();
        await this.xlSize.click();
        await this.addBag.waitForExist();
        await this.addBag.waitForClickable();
        await this.addBag.click();
        await this.closeCart.waitForClickable();
        await this.closeCart.click();
        await this.xxlSize.moveTo();
        await this.xxlSize.waitForClickable();
        await this.xxlSize.click({x:-10,y:0});
        await this.addBag.click();
        await this.closeCart.waitForClickable();
        await this.closeCart.click();
        await this.allSizes('3xl').moveTo();
        await this.sSize.waitForClickable();
        await this.allSizes('3xl').click();
        await this.addBag.waitForClickable();
        await this.addBag.click();
        await this.closeCart.waitForClickable();
        await this.closeCart.click();
    } 
    async fourthItem() {
        await browser.setCookies([
            {name:'__Secure-3PSIDCC',value: 'ABTWhQH5KNLGshr81A5fdgtuh7aZRouH8a8nqJoye6o_x0rvBRXQ1aKiKaStccDiAHFKHj5byK0',},
            {name:'__Secure-3PSIDTS',value:'sidts-CjIBPVxjSoOgXYhoLZue0vh3-3qqKFT0tuv8kYINuzimRsYuoiRoOphUQoOcZO1wzr8zqxAA'},
        ]);
        await browser.refresh()
        await this.accessoriesHeader.waitForClickable();
        await this.accessoriesHeader.click();
        await this.sharkBackpack.click();
        await this.addBag.waitForExist();
        await this.addBag.waitForClickable();
        await this.addBag.click();
        await this.closeCart.waitForClickable();
        await this.closeCart.click();
    }
}

module.exports = new LoginPage();
