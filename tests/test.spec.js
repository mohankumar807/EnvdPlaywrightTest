const { test } = require('@playwright/test');
//import POManager instead of indivdual classes
const { POManager } = require('../pages/POManager/POManager');


test.describe('Consignment Tests', async () => {
    //annotation to let vscode know that pomanager is instance of POManager class
    /** @type { POManager }*/
    let consignments;

    test.beforeEach(async ({ page }) => {
        consignments = new POManager(page);
        await consignments.getloginflow().loginflow();
        await consignments.gethomepage().gotocreatefromscratchpage();
        await consignments.getfromscratchpage().gotomovementpage();
        await consignments.getmovementflow().movementfill();
    });

    test('TC1- Cattle Consignment', async ({ page }) => {
        const cattleconsignments = new POManager(page);
        await cattleconsignments.getselectspeciespage().gotoformspage();
        await cattleconsignments.getformsflow().formscattlefill();
        await cattleconsignments.getlivestockflow().livestockcattle();//consignmentid
        await cattleconsignments.gethistoryflow().historycattle();

    });

    test('TC2- SheepLamb Consignment', async ({ page }) => {
        const sheepconsignment = new POManager(page);
        await sheepconsignment.getselectspeciespage().selectspeciessheeplamb();
        await sheepconsignment.getselectspeciespage().gotoformspage();
        await sheepconsignment.getformsflow().formssheeplambfill();
        await sheepconsignment.getlivestockflow().livestocksheeplamb();//consignmentid
    });

    test.afterEach(async ({ page }) => {
        // await page.pause();
    });
});