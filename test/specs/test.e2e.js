const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')


describe('logging into gym shark', () => {
    it('Lets you log into gym shark', async () => {
        await LoginPage.open()

        await LoginPage.login('gunner.hessing@yahoo.com', 'B$ur0cks')
        await expect(SecurePage.yourAccount).toBeExisting()
        await expect(SecurePage.yourAccount).toHaveTextContaining(
            'YOUR GYMSHARK ACCOUNT')
    })
})
