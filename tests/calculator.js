let homePage = require('../pages/homePage');

describe('Demo claculator test', function () {
    it('Addition test', function () {
        homePage.get('https://juliemr.github.io/protractor-demo/');

        browser.sleep(2000);
        homePage.enterFirstNumber(3);
        homePage.selectPlus();
        homePage.enterSecondNumber(4);
        homePage.clickGo();
        browser.sleep(3000);
        homePage.verifyResult('7');
        browser.sleep(3000);
    });

    it('Subtraction test', function () {
        homePage.get('https://juliemr.github.io/protractor-demo/');

        browser.sleep(2000);
        homePage.enterFirstNumber(3);
        homePage.selectMinus();
        homePage.enterSecondNumber(4);
        homePage.clickGo();
        browser.sleep(3000);
        homePage.verifyResult('-1');
        browser.sleep(3000);
    });
})