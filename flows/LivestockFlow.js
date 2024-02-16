const { expect } = require('@playwright/test');
const { LivestockPage } = require('../pages/LivestockPage');

class LivestockFlow {

    constructor(page) {
        this.page = page;
        this.livestockpage = new LivestockPage(page);
    }

    async fillCattleLivestock() {
        await this.livestockpage.livestockassertions();//consignmentid
        await this.livestockpage.clickonaddlivestockbtn();
        await this.livestockpage.enternoofheads();//faker
        await this.livestockpage.enterbreed();
        await this.livestockpage.entersexcattle();
        await this.livestockpage.enterbrand();
        await this.livestockpage.enternlistag();
        await this.livestockpage.enternrumentag();
        await this.livestockpage.clickaddbtn();
        await this.livestockpage.gotonextpage();
    }

    async fillSheepLivestock() {
        await this.livestockpage.livestockassertions();//consignmentid
        await this.livestockpage.clickonaddlivestockbtn();
        await this.livestockpage.enternoofheads();//faker
        await this.livestockpage.enterbreed();
        await this.livestockpage.entersexsheeplamb();
        await this.livestockpage.enteryearborn();//sheep specific
        await this.livestockpage.entermonthofsheering();//sheep specific
        await this.livestockpage.enterbrand();
        await this.livestockpage.enternlistag();
        await this.livestockpage.clickaddbtn();
        await this.livestockpage.gotonextpage();
    }
}

module.exports = { LivestockFlow };