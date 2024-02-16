const { expect } = require('@playwright/test');
const { DeclarationPage } = require('../pages/DeclarationPage');

class DeclarationFlow {

    constructor(page) {
        this.page = page;
        this.DeclarationPage = new DeclarationPage(page);
    }
    async fillDelcarationPage() {
        await this.DeclarationPage.gotodeclarationtab();
        await this.DeclarationPage.signdeclaration();
        await this.DeclarationPage.filltelephone();
        await this.DeclarationPage.fillemail();
        await this.DeclarationPage.fillcheckbox();
        await this.DeclarationPage.clicksubmitprint();
    }

}

module.exports = { DeclarationFlow };