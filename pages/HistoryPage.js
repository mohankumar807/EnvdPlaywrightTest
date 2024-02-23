const { expect } = require('@playwright/test');
const { CommonPage } = require('./POManager/CommonPage');
class HistoryPage {

    constructor(page) {
        this.page = page;
        this.commonpage = new CommonPage(page);
        this.q17 = page.locator('div[data-cy="17"]').getByText('No');
        this.q17child = page.locator('div[data-cy="17"]').getByText('Please select');
        this.q17childans = page.getByText('6 - 12 Months');
        this.q25 = page.locator('div[data-cy="25"]').getByText('No');
        this.q26 = page.locator('div[data-cy="26"]').getByText('No');
        this.beefcattledropdown = page.locator('div[data-cy="28"]').getByText('Please select');
        this.q29 = page.locator('div[data-cy="29"]').getByText('No');
        this.q166 = page.locator('div[data-cy="166"]').getByText('No');
        this.clinicaldropdown = page.locator('div[data-cy="77"]').getByText('Please select');
        this.jbasscore = page.locator('div[data-cy="78"] input[type="text"]');
        this.jddsscore = page.locator('div[data-cy="170"] input[type="text"]');
        this.q79 = page.locator('div[data-cy="79"]').getByText('No');
        this.q83 = page.locator('div[data-cy="83"]').getByText('No');
        this.q85 = page.locator('div[data-cy="85"]').getByText('No');
        //sheeplamb

    }
    //cattle
    async answerq17() {
        await this.q17.click();
        await this.q17child.click();
        await this.q17childans.click();
    }
    async answerq25() {
        await this.q25.click();
    }
    async answerq26() {
        await this.q26.click();
    }
    async answerbeefcattledropdown() {
        await this.beefcattledropdown.click();
        this.beefcattledropdownans = this.page.locator('.jsx-590740876 .Dropdown--Title').last();
        await this.beefcattledropdownans.click();
    }
    async answerq29() {
        await this.q29.click();
    }
    async answerq166() {
        await this.q166.click();
    }
    async answerclinicaldropdown() {
        await this.clinicaldropdown.click();
        this.clinicaldropdownans = this.page.locator('.jsx-590740876 .small').getByText('No');
        await this.clinicaldropdownans.click();
    }
    async answerjbasscore() {
        await this.jbasscore.fill("1");
    }
    async answerjddsscore() {
        await this.jddsscore.fill("2");
    } async answerq79() {
        await this.q79.click();
    }
    async answerq83() {
        await this.q83.click();
    }
    async answerq85() {
        await this.q85.click();
    }
    async gotofoodsafetypage() {
        await this.commonpage.nextpage.click();
    }
}
//export classname so it can be accessed from outside
module.exports = { HistoryPage };
