class CommonPage {

    constructor(page) {
        this.addbutton = page.locator('.Button--Small').getByText('Add', { exact: true });
        this.nextstep = page.getByText('Next step');
        this.nextpage = page.getByRole('button', { name: 'Next' })
    }

    async gotonextstep() {
        await this.nextstep.click();
    }
}
module.exports = { CommonPage };
