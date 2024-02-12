const { expect } = require('@playwright/test');
const { LivestockPage } = require('../pages/LivestockPage');

class LivestockFlow {

    constructor(page) {
        this.page = page;
        this.livestockpage = new LivestockPage(page);
    }

    async livestockcattle() {
        await this.livestockpage.livestockassertions();
        await this.livestockpage.clickonaddlivestockbtn();
        await this.livestockpage.enternoofheads();
        await this.livestockpage.enterbreed();
        await this.livestockpage.entersexcattle();
        await this.livestockpage.enterbrand();
        await this.livestockpage.enternlistag();
        await this.livestockpage.enternrumentag();
        await this.livestockpage.clickaddbtn();
        await this.livestockpage.gotonextpage();
    }

    async livestocksheeplamb() {
        await this.livestockpage.livestockassertions();
        await this.livestockpage.clickonaddlivestockbtn();
        await this.livestockpage.enternoofheads();
        await this.livestockpage.enterbreed();
        await this.livestockpage.entersexsheeplamb();
        await this.livestockpage.enteryearborn();
        await this.livestockpage.entermonthofsheering();
        await this.livestockpage.enterbrand();
        await this.livestockpage.enternlistag();
        await this.livestockpage.clickaddbtn();
        await this.livestockpage.gotonextpage();
    }
}

module.exports = { LivestockFlow };