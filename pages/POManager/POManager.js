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
    }
    //login
    getloginpage() {
        return this.loginpage;
    }
    getloginflow() {
        return this.loginflow;
    }
    //homepage
    gethomepage() {
        return this.homepage;
    }
    getfromscratchpage() {
        return this.fromscratchpage;
    }
    //Movement
    getmovementpage() {
        return this.movementpage;
    }
    getmovementflow() {
        return this.movementflow;
    }
    //species
    getselectspeciespage() {
        return this.selectspeciespage;
    }
    //Forms
    getformspage() {
        return this.formspage;
    }
    getformsflow() {
        return this.formsflow;
    }
    //livestock
    getlivestockpage() {
        return this.livestockpage;
    }
    getlivestockflow() {
        return this.livestockflow;
    }
    //history
    gethistorypage() {
        return this.historypage;
    }
    gethistoryflow() {
        return this.historyflow;
    }
}
//export class
module.exports = { POManager };