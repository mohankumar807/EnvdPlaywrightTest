const { expect } = require('@playwright/test');
const { CommonPage } = require('./POManager/CommonPage');
class FormsPage {

    constructor(page) {
        this.commonpage = new CommonPage(page);
        this.NVD = page.getByText('NVD', { exact: true });
        this.MSA = page.getByText('MSA');
        this.NCHD = page.getByText('NCHD');
        this.sheepNCHD = page.getByText('National Sheep Health Declaration');
    }

    async selectNVD() {
        await this.NVD.click();
    }

    async selectMSA() {
        await this.MSA.click();
    }

    async selectNCHD() {
        await this.NCHD.click();
    }

    async selectsheepNCHD() {
        await this.sheepNCHD.click();
    }
}
//export classname so it can be accessed from outside
module.exports = { FormsPage };
