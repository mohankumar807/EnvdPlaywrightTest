const { expect } = require('@playwright/test');

class DeclarationPage {

    constructor(page) {
        this.declarationtab = page.locator('.tabbar-item').getByText('Declaration', { exact: true });
        this.sign = page.locator('[type="button"]').getByText('Sign declaration', { exact: true });
        this.modalheader = page.locator('.jsx-1398544148 .Modal--Header');
        this.canvas = page.locator('canvas[style="width: 100%; touch-action: none;"]');
    }

    async gotodeclarationtab() {
        await this.declarationtab.click();
    }

    async signdeclaration() {
        await this.sign.click();
        //assert pop-up
        await expect(this.modalheader).toHaveText('Draw your image');
        //draw signature
        await this.canvas.click();
    }

}
//export classname so it can be accessed from outside
module.exports = { DeclarationPage };
