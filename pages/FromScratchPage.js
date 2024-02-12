const { expect } = require('@playwright/test');
class FromScratchPage {

    constructor(page) {
        this.createscratch = page.locator("button[data-cy='create-scrach']");
        this.title = page.locator('.title-section h1');
        this.createsfromscratch = page.locator("button[data-cy='create-scrach']");
    }

    async gotomovementpage() {
        await this.createsfromscratch.click();
        //assert if on movements page
        await expect(this.title).toHaveText("Movement information");
    }
}
//export classname so it can be accessed from outside
module.exports = { FromScratchPage };
