const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/access.page.js')
const SecurePage = require('../pageobjects/safe.page.js')


describe('logging into gym shark', () => {
    it('Lets you log into gym shark', async () => {
        await LoginPage.open()

        await LoginPage.login('gunhessing@gmail.com', 'GymShark1passwor?')
    })
})