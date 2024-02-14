const { expect } = require('@playwright/test');
const { FormsPage } = require('../pages/FormsPage');

class FormsFlow {

    constructor(page) {
        this.page = page;
        this.formspage = new FormsPage(page);
    }
    async formscattlefill() {
        await this.formspage.selectNVD();
        await this.formspage.selectMSA();
        await this.formspage.selectNCHD();
        await this.formspage.gotonextpage();
    }

    async formssheeplambfill() {
        await this.formspage.selectNVD();
        await this.formspage.selectsheepNCHD();
        await this.formspage.gotonextpage();
    }
}

module.exports = { FormsFlow };