const { expect } = require('@playwright/test');
class LivestockPage {

    constructor(page) {
        this.page = page;
        this.status = page.locator('.Tag');
        this.addlivestock = page.getByText('Add livestock description');
        this.title = page.locator('h3.jsx-2797809347');
        this.heads = page.locator('div[data-cy="3"] input[type="text"]');
        this.breed = page.locator('div[data-cy="4"] input[type="text"]');
        this.selectsexdropdown = page.locator('div[data-cy="5"]').getByText('Please select');
        this.calves = page.locator('.Dropdown--Item').nth(6);
        this.drawbrandno = page.locator('div[data-cy="8"]').getByText('No', { exact: true });
        this.brandinfo = page.locator('div[data-cy="8"] input[type="text"]');
        this.electronictags = page.locator('div[data-cy="15"] input[type="text"]');
        this.rumentags = page.locator('div[data-cy="16"] input[type="text"]');
        this.addbutton = page.locator('[type="submit"]');
        this.nextpage = page.getByRole('button', { name: 'Next' })
        //sheeplamb
        this.mixed = page.getByText('Mixed');
        this.yearborn = page.locator('[data-cy="6"] input[type="text"]');
        this.monthofsheering = page.locator('[data-cy="7"] .jsx-1255300392');
        this.maymonth = page.locator('.Popover--Content').getByText('May');
    }

    async livestockassertions() {
        await expect(this.status).toHaveText("Draft");
        const consgignmentid = await this.page.locator('.jsx-3833991151.bold').first().textContent();
        console.log("Consignment number is ", consgignmentid);
    }

    async clickonaddlivestockbtn() {
        const livestocktitle = 'Please provide a description of the livestock moving';
        await this.addlivestock.click();
        //assert popup
        await expect(this.title).toContainText(livestocktitle);
    }

    //cattle
    async enternoofheads() {
        await this.heads.fill('99');
    }

    async enterbreed() {
        await this.breed.fill('Test Breed');
    }

    async entersexcattle() {
        await this.selectsexdropdown.click();
        await this.calves.click();
    }

    async enterbrand() {
        await this.drawbrandno.click();
        await this.brandinfo.fill('123 brand info');
    }

    async enternlistag() {
        await this.electronictags.fill('55');
    }
    async enternrumentag() {
        await this.rumentags.fill('44');
    }

    async clickaddbtn() {
        await this.addbutton.click();
    }

    async gotonextpage() {
        await this.nextpage.click();
    }

    //sheeplamb
    async entersexsheeplamb() {
        await this.selectsexdropdown.click();
        await this.mixed.click();
    }

    async enteryearborn() {
        await this.yearborn.fill('2005');
    }

    async entermonthofsheering() {
        await this.monthofsheering.click();
        await this.maymonth.click();
    }
}
//export classname so it can be accessed from outside
module.exports = { LivestockPage };
