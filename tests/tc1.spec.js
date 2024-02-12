const { test, expect } = require('@playwright/test');

('TC1- Browser init', async ({ page }) => {

    // const context = await browser.newContext();
    // const page = await context.newPage();

    //Login to envd
    {
        await page.goto("https://envd.integritysystems.com.au/");
        await page.locator('.login-btn').click();

        await page.locator('#username').fill("lpa.user1@yopmail.com");
        await page.locator('#password').fill("Test@1234");

        await page.locator("button[type='submit']").click();
        await page.locator('.btn-lpa').click();

        await page.locator("[value='Access eNVD']").first().click();
    }

    //Create consignment
    {
        const createconsingment = page.locator("button[data-cy='consignment-create-new']");
        await expect(createconsingment).toContainText('Create new consignment');
        await createconsingment.click();
    }

    //Create from Scratch
    {
        const scracthtitle = page.locator('.title-section h1');
        console.log("scracthtitle is - ", await scracthtitle.textContent());
        await expect(scracthtitle).toContainText("What would you like to do?");
        //navigate to movement page
        const createscratch = page.locator("button[data-cy='create-scrach']");
        await createscratch.click();
    }

    //Movement Page
    {
        const movementtitle = page.locator('.title-section h1');
        await expect(movementtitle).toHaveText("Movement information");

        //Enter transportedto pic
        {
            const transportedto = page.locator('input[placeholder="Search by PIC, town, or company name"]');
            await transportedto.fill("QBZZ2222");
            const dropitem = page.locator('div.Dropdown--Title');
            //assert for dropitem text
            await expect(dropitem).toHaveText('G BASHA');
            await dropitem.click();
        }

        //Enter movementdate
        {
            const movementdate = page.locator('input[placeholder="dd/mm/yyyy"]');
            await movementdate.click();
            //wait for date grid to attach to DOM - it happens when UI is visible
            await page.locator('.nice-dates-grid_container').waitFor({
                state: 'attached'
            })
            const today = page.locator('.nice-dates-day.-today');
            await today.click();

        }

        //Enter movementtime
        {
            const hours = page.locator('.form-element.flex-row').first();
            const minutes = page.locator('.form-element.flex-row').nth(1);
            const ampm = page.locator('.form-element.flex-row').last();

            await hours.click();
            await page.locator('[data-idx="6"]').nth(0).click();

            await minutes.click();
            await page.locator('[data-idx="6"]').nth(1).click();

            await ampm.click();
            await page.locator('[data-idx="2"]').nth(1).click();
        }

        //go to nextpage
        await page.getByText('Next step').click();

    }

    //Select species page
    {
        const speciestitle = page.locator('.title-section h1');
        await expect(speciestitle).toHaveText("Select species");
        //go to nextpage
        await page.getByText('Next step').click();
    }

    //Select forms page
    {
        const formstitle = page.locator('.title-section h1');
        await expect(formstitle).toHaveText("Select Forms");

        const nvd = page.getByText('NVD', { exact: true });
        await nvd.click();

        const msa = page.getByText('MSA');
        await msa.click();

        const nchd = page.getByText('NCHD');
        await nchd.click();

        //go to nextpage
        await page.getByText('Next step').click();

    }

    //Livestock page
    {
        //assertions
        const status = page.locator('.Tag');
        await expect(status).toHaveText("Draft");

        //storing consginment number
        const consgignmentid = await page.locator('.jsx-3833991151.bold').first().textContent();
        console.log("Consignment number is ", consgignmentid);

        //add livestock description
        {
            const addlivestock = page.getByText('Add livestock description');
            await addlivestock.click();

            //assert popup
            await expect(page.locator('h3.jsx-2797809347')).toContainText('Please provide a description of the livestock moving');

            //number of heads
            const heads = page.locator('div[data-cy="3"] input[type="text"]');
            await heads.fill('99');

            //breed
            const breed = page.locator('div[data-cy="4"] input[type="text"]');
            await breed.fill('Angus');

            //sex
            const selectdropdown = page.locator('div[data-cy="5"]').getByText('Please select');
            await selectdropdown.click();
            const calves = page.locator('.Dropdown--Item').nth(6);
            await calves.click();

            //brand
            const drawbrandno = page.locator('div[data-cy="8"]').getByText('No', { exact: true });
            await drawbrandno.click();
            const brandinfo = page.locator('div[data-cy="8"] input[type="text"]');
            await brandinfo.fill('123 brand info');

            //number of tags
            const electronictags = page.locator('div[data-cy="15"] input[type="text"]');
            await electronictags.fill('55');
            const rumentags = page.locator('div[data-cy="16"] input[type="text"]');
            await rumentags.fill('44');

            //addbutton
            const addbutton = page.locator('[type="submit"]');
            await addbutton.click();

            //next button
            await page.getByRole('button', { name: 'Next' }).click();
        }

    }
    await page.pause();
});