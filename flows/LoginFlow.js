const { expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

class LoginFlow {

    constructor(page) {
        this.page = page;
        this.loginpage = new LoginPage(page);
    }
    async loginFlow() {
        await this.loginpage.gotoenvdurl();
        await this.loginpage.logintoenvd();
    }
}

module.exports = { LoginFlow };