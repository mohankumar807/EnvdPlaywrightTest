const { expect } = require('@playwright/test');
const { HistoryPage } = require('../pages/HistoryPage');

class HistoryFlow {

    constructor(page) {
        this.page = page;
        this.HistoryPage = new HistoryPage(page);
    }
    async historycattle() {
        await this.HistoryPage.answerq17();
        await this.HistoryPage.answerq25();
        await this.HistoryPage.answerq26();
        await this.HistoryPage.answerbeefcattledropdown();
        await this.HistoryPage.answerq29();
        await this.HistoryPage.answerq166();
        await this.HistoryPage.answerclinicaldropdown();
        await this.HistoryPage.answerjbasscore();
        await this.HistoryPage.answerjddsscore();
        await this.HistoryPage.answerq79();
        await this.HistoryPage.answerq83();
        await this.HistoryPage.answerq85();
        await this.HistoryPage.gotofoodsafetypage();
    }

    // async historye2esheeplamb() {
    //    
    // }
}

module.exports = { HistoryFlow };