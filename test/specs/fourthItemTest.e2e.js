const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/access.page.js')
const SecurePage = require('../pageobjects/safe.page.js')


describe ('fourth product and all sizes', () => {
    it('Lets you put all sizes in the cart of the fourth item', async () => {
        await LoginPage.open()

        await LoginPage.loginandlogout('gunhessing@gmail.com', 'GymShark1passwor?')
        await LoginPage.fourthItem()

    })
})