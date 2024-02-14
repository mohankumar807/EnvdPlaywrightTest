const { test } = require('@playwright/test');
//import POManager instead of indivdual classes
const { POManager } = require('../pages/POManager/POManager');


test.describe('Consignment Tests', async () => {
    //annotation to let vscode know that pomanager is instance of POManager class
    /** @type {POManager} */
    let pomanager;

    test.beforeEach(async ({ page }) => {
        pomanager = new POManager(page);
        await pomanager.getloginflow().loginflow();
        await pomanager.gethomepage().gotocreatefromscratchpage();
        await pomanager.getfromscratchpage().gotomovementpage();
        await pomanager.getmovementflow().movementfill();
    });

    test('TC1- Cattle Consignment', async ({ page }) => {
        await pomanager.getselectspeciespage().gotoformspage();
        await pomanager.getformsflow().formse2ecattle();
        await pomanager.getlivestockflow().livestockcattle();
        await pomanager.gethistoryflow().historycattle();
        // await page.pause();
    });

    test('TC2- SheepLamb Consignment', async ({ page }) => {
        await pomanager.getselectspeciespage().selectspeciessheeplamb();
        await pomanager.getselectspeciespage().gotoformspage();
        await pomanager.getformsflow().formse2esheeplamb();
        await pomanager.getlivestockflow().livestocksheeplamb();
        // await page.pause();
    });
});