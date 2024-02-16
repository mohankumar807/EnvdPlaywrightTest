const { expect } = require('@playwright/test');
const { MovementPage } = require('../pages/MovementPage');

class MovementFlow {

    constructor(page) {
        this.page = page;
        this.movementpage = new MovementPage(page);
    }
    async fillMovementDetails() {
        await this.movementpage.entertransporttopic();
        await this.movementpage.entermovementdate();
        await this.movementpage.entermovementtime();
        await this.movementpage.gotonextstep();
    }
}

module.exports = { MovementFlow };