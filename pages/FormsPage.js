const { expect } = require('@playwright/test');
class FormsPage {

    constructor(page) {
        this.NVD = page.getByText('NVD', { exact: true });
        this.MSA = page.getByText('MSA');
        this.NCHD = page.getByText('NCHD');
        this.sheepNCHD = page.getByText('National Sheep Health Declaration');
        this.nextpage = page.getByText('Next step');
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

    async gotonextpage() {
        await this.nextpage.click();
    }
}
//export classname so it can be accessed from outside
module.exports = { FormsPage };
