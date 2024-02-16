const { expect } = require('@playwright/test');
const faker = require('faker');
const { CommonPage } = require('./POManager/CommonPage')

class DeclarationPage {

    constructor(page) {
        this.commonpage = new CommonPage(page);
        this.declarationtab = page.locator('.tabbar-item').getByText('Declaration', { exact: true });
        this.sign = page.locator('[type="button"]').getByText('Sign declaration', { exact: true });
        this.modalheader = page.locator('.jsx-1398544148 .Modal--Header');
        this.canvas = page.locator('canvas[style="width: 100%; touch-action: none;"]');
        this.telephone = page.locator('[data-cy="declaration.phone"]');
        this.email = page.locator('[data-cy="declaration.email"]');
        this.declarationcheck = page.locator('.checkmark').nth(14);
        this.submitprint = page.getByText('Submit & print', { exact: true });
        this.confirmsubmit = page.locator('.jsx-1398544148 .Modal--Inner').getByRole('button', { name: 'Submit', exact: true })
    }

    async gotodeclarationtab() {
        await this.declarationtab.click();
    }

    async signdeclaration() {
        await this.sign.click();
        //assert pop-up
        await expect(this.modalheader).toHaveText('Draw your image');
        await this.canvas.click();
        await this.commonpage.addbutton.click();
    }

    async filltelephone() {
        const phoneNumber = '04' + faker.datatype.number({ min: 10000000, max: 99999999 }).toString();
        await this.telephone.fill(phoneNumber);
    }

    async fillemail() {
        const randomEmail = faker.internet.email().replace(/@.*$/, '@yopmail.com');
        await this.email.fill(randomEmail);
    }

    async fillcheckbox() {
        await this.declarationcheck.click();
    }

    async clicksubmitprint() {
        await this.submitprint.click();
        await this.confirmsubmit.click();
    }
}
//export classname so it can be accessed from outside
module.exports = { DeclarationPage };
