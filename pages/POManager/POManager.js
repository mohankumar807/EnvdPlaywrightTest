//import indivual classes
const { LoginPage } = require('../LoginPage');
const { LoginFlow } = require('../../flows/LoginFlow');
const { HomePage } = require('../HomePage');
const { FromScratchPage } = require('../FromScratchPage');
const { MovementPage } = require('../MovementPage');
const { MovementFlow } = require('../../flows/MovementFlow');
const { SelectSpeciesPage } = require('../SelectSpeciesPage');
const { FormsPage } = require('../FormsPage');
const { FormsFlow } = require('../../flows/FormsFlow');
const { LivestockPage } = require('../LivestockPage');
const { LivestockFlow } = require('../../flows/LivestockFlow');
const { HistoryPage } = require('../HistoryPage');
const { HistoryFlow } = require('../../flows/HistoryFlow');
const { DeclarationPage } = require('../DeclarationPage');
const { DeclarationFlow } = require('../../flows/DeclarationFlow');

class POManager {

    constructor(page) {
        this.loginpage = new LoginPage(page);
        this.loginflow = new LoginFlow(page);
        this.homepage = new HomePage(page);
        this.fromscratchpage = new FromScratchPage(page);
        this.movementpage = new MovementPage(page);
        this.movementflow = new MovementFlow(page);
        this.selectspeciespage = new SelectSpeciesPage(page);
        this.formspage = new FormsPage(page);
        this.formsflow = new FormsFlow(page);
        this.livestockpage = new LivestockPage(page);
        this.livestockflow = new LivestockFlow(page);
        this.historypage = new HistoryPage(page);
        this.historyflow = new HistoryFlow(page);
        this.declarationpage = new DeclarationPage(page);
        this.declarationflow = new DeclarationFlow(page);
    }
    //login
    getLoginPage() {
        return this.loginpage;
    }
    getLoginFlow() {
        return this.loginflow;
    }
    //homepage
    getHomePage() {
        return this.homepage;
    }
    getFromScratchPage() {
        return this.fromscratchpage;
    }
    //Movement
    getMovementPage() {
        return this.movementpage;
    }
    getMovementFlow() {
        return this.movementflow;
    }
    //species
    getSelectSpeciesPage() {
        return this.selectspeciespage;
    }
    //Forms
    getFormsPage() {
        return this.formspage;
    }
    getFormsFlow() {
        return this.formsflow;
    }
    //livestock
    getLivestockPage() {
        return this.livestockpage;
    }
    getLivestockFlow() {
        return this.livestockflow;
    }
    //history
    getHistoryPage() {
        return this.historypage;
    }
    getHistoryFlow() {
        return this.historyflow;
    }
    //declaration
    getDeclarationPage() {
        return this.declarationpage;
    }
    getDeclarationFlow() {
        return this.declarationflow;
    }
}
//export class
module.exports = { POManager };