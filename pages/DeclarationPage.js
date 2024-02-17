const { expect } = require('@playwright/test');
const faker = require('faker');
const { CommonPage } = require('./POManager/CommonPage')

class DeclarationPage {

    constructor(page) {
        this.page = page;
        this.commonpage = new CommonPage(page);
        this.declarationtab = page.locator('.tabbar-item').getByText('Declaration', { exact: true });
        this.sign = page.locator('[type="button"]').getByText('Sign declaration', { exact: true });
        this.modalheader = page.locator('.jsx-1398544148 .Modal--Header');
        this.canvas = page.locator('canvas[style="width: 100%; touch-action: none;"]');
        this.telephone = page.locator('[data-cy="declaration.phone"]');
        this.email = page.locator('[data-cy="declaration.email"]');
        this.declarationcheck = page.locator('.checkmark').nth(14);
        this.submitprint = page.locator('[type="button"]').getByText("Submit & print", { exact: true });
        this.modaltitle = page.locator('.jsx-1398544148 .Modal--Header');
        this.confirmsubmit = page.locator('.Modal--Footer button[type="submit"]').getByText('Submit', { exact: true });
        this.summarytitle = page.locator('h1[class="jsx-4082709580"]');
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
        //assert popup
        await expect(this.modaltitle).toHaveText("Are you sure you're ready to submit this consignment?");
        await this.confirmsubmit.click();
        //assert submit action
        await expect(this.summarytitle).toHaveText('Consignment summary');
    }
}
//export classname so it can be accessed from outside
module.exports = { DeclarationPage };
