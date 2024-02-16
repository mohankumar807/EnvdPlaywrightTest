const { expect } = require('@playwright/test');
const { CommonPage } = require('../pages/POManager/CommonPage');
const { FormsPage } = require('../pages/FormsPage');

class FormsFlow {

    constructor(page) {
        this.page = page;
        this.commonpage = new CommonPage(page);
        this.formspage = new FormsPage(page);
    }
    async fillCattleForms() {
        await this.formspage.selectNVD();
        await this.formspage.selectMSA();
        await this.formspage.selectNCHD();
        await this.commonpage.gotonextstep();
    }

    async fillsheepforms() {
        await this.formspage.selectNVD();
        await this.formspage.selectsheepNCHD();
        await this.commonpage.gotonextstep();
    }
}

module.exports = { FormsFlow };