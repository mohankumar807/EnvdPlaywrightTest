const { expect } = require('@playwright/test');
class HomePage {

    constructor(page) {
        this.createconsbtn = page.locator("button[data-cy='consignment-create-new']");
        this.title = page.locator('.title-section h1');
    }

    async gotocreatefromscratchpage() {
        await this.createconsbtn.click();
        //assert if on nextpage
        await expect(this.title).toHaveText("What would you like to do?");
    }
}
//export classname so it can be accessed from outside
module.exports = { HomePage };
