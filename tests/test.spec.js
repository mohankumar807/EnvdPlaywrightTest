const { test, expect } = require('@playwright/test');
const { POManager } = require('../pages/POManager/POManager');

test.describe('TS1- Consignment Tests', async () => {
    //annotation to let vscode know that consignments is instance of POManager class
    /** @type { POManager }*/
    let consignments;

    test.beforeEach(async ({ page }) => {
        consignments = new POManager(page);
        await consignments.getLoginFlow().loginFlow();
        await consignments.getHomePage().gotoCreateFromScratchPage();
        await consignments.getFromScratchPage().gotoMovementPage();
        await consignments.getMovementFlow().fillMovementDetails();
    });

    test('TC1- Cattle Consignment', async ({ }) => {
        test.setTimeout(120000);
        await consignments.getSelectSpeciesPage().gotoFormsPage();
        await consignments.getFormsFlow().fillCattleForms();
        await consignments.getLivestockFlow().fillCattleLivestock();//consignmentid
        await consignments.getHistoryFlow().fillCattleHistory();
        await consignments.getDeclarationFlow().fillDelcarationPage();
    });

    test('TC2- SheepLamb Consignment', async ({ }) => {
        test.setTimeout(120000);
        await consignments.getSelectSpeciesPage().selectSpeciesSheepLamb();
        await consignments.getSelectSpeciesPage().gotoFormsPage();
        await consignments.getFormsFlow().fillsheepforms();
        await consignments.getLivestockFlow().fillSheepLivestock();//consignmentid
    });

    test.afterEach(async ({ page }) => {
        // await page.pause();
    });
});

test.describe('TS2- Consignment Storage Session Test', async () => {
    //annotation to let vscode know that consignments is instance of POManager class
    /** @type { POManager }*/
    let consignments;
    let envdcontext;

    test.beforeAll(async ({ browser }) => {
        const context = await browser.newContext();
        let page = await context.newPage();
        consignments = new POManager(page);
        await consignments.getLoginFlow().loginFlow();
        await page.waitForLoadState('networkidle');
        //save storage state        
        await context.storageState({ path: 'storageState.json' });
        //create context and page with storagestate
        envdcontext = await browser.newContext({ storageState: 'storageState.json' });
        page = await envdcontext.newPage();
    });

    test.beforeEach(async () => {
        const page = await envdcontext.newPage();
        await page.goto('https://envd.integritysystems.com.au/consignments/');
        await page.waitForLoadState('networkidle');
        await consignments.getHomePage().gotoCreateFromScratchPage();
        await consignments.getFromScratchPage().gotoMovementPage();
        await consignments.getMovementFlow().fillMovementDetails();
    });

    test('TC21- Cattle Storage Session', async () => {
        // tests
    });

    test('TC22- SheepLamb Storage Session', async () => {
        // tests
    });

    test.afterEach(async ({ page }) => {
        // await page.pause();
    });
});

test.describe("Token Access", async () => {
    //annotation to let vscode know that consignments is instance of POManager class
    /** @type { POManager }*/
    let consignments;
    let token = '';

    test.beforeAll(async ({ browser }) => {
        if (!token) {
            const context = await browser.newContext();
            let page = await context.newPage();
            consignments = new POManager(page);
            await consignments.getLoginFlow().loginFlow();
            await page.waitForLoadState('networkidle');
            //save token from session storage
            token = await page.evaluate(() => sessionStorage.getItem('_tokenkey'));
            console.log('Token is: ', token);
        }
    });

    test.beforeEach(async ({ page }) => {
        await page.goto("https://envd.integritysystems.com.au?t=" + token);
        await page.waitForLoadState('networkidle');

    });

    test('TC1- Cattle Consignment', async () => {
        await consignments.getHomePage().gotoCreateFromScratchPage();
        await consignments.getFromScratchPage().gotoMovementPage();
        await consignments.getMovementFlow().fillMovementDetails();
        await consignments.getSelectSpeciesPage().gotoFormsPage();
        await consignments.getFormsFlow().fillCattleForms();
        await consignments.getLivestockFlow().fillCattleLivestock();//consignmentid
        await consignments.getHistoryFlow().fillCattleHistory();
        await consignments.getDeclarationFlow().fillDelcarationPage();
    });

    test('TC2- SheepLamb Consignment', async () => {
        await consignments.getHomePage().gotoCreateFromScratchPage();
        await consignments.getFromScratchPage().gotoMovementPage();
        await consignments.getMovementFlow().fillMovementDetails();
        await consignments.getSelectSpeciesPage().selectSpeciesSheepLamb();
        await consignments.getSelectSpeciesPage().gotoFormsPage();
        await consignments.getFormsFlow().fillsheepforms();
        await consignments.getLivestockFlow().fillSheepLivestock();//consignmentid
    });
});
