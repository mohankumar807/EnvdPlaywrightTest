const { test } = require('@playwright/test');
const { POManager } = require('../pages/POManager/POManager');

test.describe('Consignment Tests', async () => {
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
        await consignments.getSelectSpeciesPage().gotoFormsPage();
        await consignments.getFormsFlow().fillCattleForms();
        await consignments.getLivestockFlow().fillCattleLivestock();//consignmentid
        await consignments.getHistoryFlow().fillCattleHistory();
        await consignments.getDeclarationFlow().fillDelcarationPage();
    });

    test('TC2- SheepLamb Consignment', async ({ }) => {
        await consignments.getSelectSpeciesPage().selectSpeciesSheepLamb();
        await consignments.getSelectSpeciesPage().gotoFormsPage();
        await consignments.getFormsFlow().fillsheepforms();
        await consignments.getLivestockFlow().fillSheepLivestock();//consignmentid
    });

    test('TC3- SheepLamb Consignment', async ({ }) => {
        await consignments.getSelectSpeciesPage().selectSpeciesSheepLamb();
        await consignments.getSelectSpeciesPage().gotoFormsPage();
        await consignments.getFormsFlow().fillsheepforms();
        await consignments.getLivestockFlow().fillSheepLivestock();//consignmentid
    });
    test('TC4- Cattle Consignment', async ({ }) => {
        await consignments.getSelectSpeciesPage().gotoFormsPage();
        await consignments.getFormsFlow().fillCattleForms();
        await consignments.getLivestockFlow().fillCattleLivestock();//consignmentid
        await consignments.getHistoryFlow().fillCattleHistory();
        await consignments.getDeclarationFlow().fillDelcarationPage();
    });

    test.afterEach(async ({ page }) => {
        // await page.pause();
    });
});