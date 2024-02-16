const { test } = require('@playwright/test');
//import POManager instead of indivdual classes
const { POManager } = require('../pages/POManager/POManager');


test.describe('Consignment Tests', async () => {
    //annotation to let vscode know that consignments is instance of POManager class
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
        await consignments.getselectspeciespage().gotoformspage();
        await consignments.getformsflow().formscattlefill();
        await consignments.getlivestockflow().livestockcattle();//consignmentid
        await consignments.gethistoryflow().historycattle();
    });

    test('TC2- SheepLamb Consignment', async ({ page }) => {
        await consignments.getselectspeciespage().selectspeciessheeplamb();
        await consignments.getselectspeciespage().gotoformspage();
        await consignments.getformsflow().formssheeplambfill();
        await consignments.getlivestockflow().livestocksheeplamb();//consignmentid
    });

    test.afterEach(async ({ page }) => {
        // await page.pause();
    });
});