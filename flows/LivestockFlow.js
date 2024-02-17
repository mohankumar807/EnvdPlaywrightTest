const { expect } = require('@playwright/test');
const { LivestockPage } = require('../pages/LivestockPage');
const { CommonPage } = require('../pages/POManager/CommonPage');


class LivestockFlow {

    constructor(page) {
        this.page = page;
        this.commonpage = new CommonPage(page);
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
        await this.commonpage.clickAddButton();
        await this.commonpage.gotoNextPage();
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
        await this.commonpage.clickAddButton();
        await this.commonpage.gotoNextPage();
    }
}

module.exports = { LivestockFlow };