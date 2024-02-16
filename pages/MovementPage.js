const { expect } = require('@playwright/test');
const { CommonPage } = require('./POManager/CommonPage');

class MovementPage {

    constructor(page) {
        this.commonpage = new CommonPage(page);
        this.title = page.locator('.title-section h1');
        this.transportedto = page.locator('input[placeholder="Search by PIC, town, or company name"]');
        this.dropitem = page.locator('.Dropdown--Title').getByText('G BASHA');
        this.movementdate = page.locator('input[placeholder="dd/mm/yyyy"]');
        this.dategrid = page.locator('.nice-dates-grid_container');
        this.today = page.locator('.nice-dates-day.-today');
        this.hours = page.locator('.form-element.flex-row').first();
        this.minutes = page.locator('.form-element.flex-row').nth(1);
        this.ampm = page.locator('.form-element.flex-row').last();
        this.sixhours = page.locator('[data-idx="6"]').nth(0);
        this.thirtyminutes = page.locator('[data-idx="6"]').nth(1);
        this.pm = page.locator('[data-idx="2"]').nth(1);
    }

    async entertransporttopic() {
        const transporttopic = 'QBZZ2222';
        const transporttopicname = 'G BASHA';
        await this.transportedto.fill(transporttopic);
        //assert for dropitem text
        await expect(this.dropitem).toHaveText(transporttopicname);
        await this.dropitem.click();
    }

    async entermovementdate() {
        await this.movementdate.click();
        //wait for date grid to attach to DOM - it happens when UI is visible
        await this.dategrid.waitFor({
            state: 'attached'
        })
        await this.today.click();
    }

    async entermovementtime() {
        await this.hours.click();
        await this.sixhours.click();

        await this.minutes.click();
        await this.thirtyminutes.click();

        await this.ampm.click();
        await this.pm.click();
    }

    async gotonextstep() {
        await this.commonpage.nextstep.click();
        //assert if on livestock page        
        await expect(this.title).toHaveText("Select species");
    }
}
//export classname so it can be accessed from outside
module.exports = { MovementPage };
