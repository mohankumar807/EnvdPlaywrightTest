const { expect } = require('@playwright/test');
const { dotenv } = require('dotenv').config();
class LoginPage {

    constructor(page) {
        //this.page is needed as we are using class this.page variable in gotoenvdurl()
        this.page = page;
        this.loginbtn = page.locator('.login-btn');
        this.usrname = page.locator('#username');
        this.pwd = page.locator('#password');
        this.submitbtn = page.locator("button[type='submit']");
        this.lpabtn = page.locator('.btn-lpa');
        this.accessenvdbtn = page.locator("[value='Access eNVD']").first();
        this.constitle = page.locator('[data-cy=consignment-heading]');
    }

    async gotoenvdurl() {
        await this.page.goto(process.env.ENVD_URL);
    }

    async logintoenvd() {
        await this.loginbtn.click();
        await this.usrname.fill(process.env.MLA_USERNAME);
        await this.pwd.fill(process.env.MLA_PASSWORD);
        await this.submitbtn.click();
        await this.lpabtn.click();
        await this.accessenvdbtn.click();
        //assert if on homepage
        await this.page.waitForNavigation();
        await expect(this.constitle).toHaveText('Consignments');
    }
}
//export classname so it can be accessed from outside
module.exports = { LoginPage };
