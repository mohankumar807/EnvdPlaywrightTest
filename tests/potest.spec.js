const { test } = require('@playwright/test');
//import POManager instead of indivdual classes
const { POManager } = require('../pages/POManager/POManager');

test('TC1- Cattle Consignment', async ({ page }) => {

    const pomanager = new POManager(page);
    //Login to envd website
    const logintoenvd = pomanager.getloginflow();
    await logintoenvd.loginflow();
    //Homepage
    const homepage = pomanager.gethomepage();
    await homepage.gotocreatefromscratchpage();
    //Create from scratch page
    const fromscratchpage = pomanager.getfromscratchpage();
    await fromscratchpage.gotomovementpage();
    //Movement Page
    const movementpage = pomanager.getmovementflow();
    await movementpage.movemente2e();
    //Select species page
    const selectspeciespage = pomanager.getselectspeciespage();
    //go to nextpage - cattle default
    await selectspeciespage.gotoformspage();
    //Select forms page
    const formsflow = pomanager.getformsflow();
    await formsflow.formse2ecattle();
    //Livestock page
    const livestockflow = pomanager.getlivestockflow();
    await livestockflow.livestockcattle();
    //page pause
    await page.pause();
});

test('TC2- SheepLamb', async ({ page }) => {

    const pomanager = new POManager(page);
    //Login to envd website
    const logintoenvd = pomanager.getloginflow();
    await logintoenvd.loginflow();
    //Homepage
    const homepage = pomanager.gethomepage();
    await homepage.gotocreatefromscratchpage();
    //Create from scratch page
    const fromscratchpage = pomanager.getfromscratchpage();
    await fromscratchpage.gotomovementpage();
    //Movement Page
    const movementpage = pomanager.getmovementflow();
    await movementpage.movemente2e();
    //Select species page - sheep/lamb
    const selectspeciespage = pomanager.getselectspeciespage();
    await selectspeciespage.selectspeciessheeplamb();
    await selectspeciespage.gotoformspage();
    //Select forms page
    const formsflow = pomanager.getformsflow();
    await formsflow.formse2esheeplamb();
    //Livestock page
    const livestockflow = pomanager.getlivestockflow();
    await livestockflow.livestocksheeplamb();
    //page pause
    await page.pause();
});