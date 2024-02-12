const { expect } = require('@playwright/test');
class SelectSpeciesPage {

    constructor(page) {
        this.title = page.locator('.title-section h1');
        this.nextpage = page.getByText('Next step');
        this.dropdownoption = page.locator('.form-element');
        this.sheeplamddropdown = page.getByText('Sheep/Lamb');
    }

    async selectspeciessheeplamb() {
        await this.dropdownoption.click();
        await this.sheeplamddropdown.click();
    }

    async gotoformspage() {
        await this.nextpage.click();
        //assert if on forms page
        await expect(this.title).toHaveText("Select Forms");
    }
}
//export classname so it can be accessed from outside
module.exports = { SelectSpeciesPage };
