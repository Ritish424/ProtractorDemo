let homePage = require('../pages/homePage');

describe('Demo claculator test', function () {
    it('Addition test', function () {
        // browser.get('https://juliemr.github.io/protractor-demo/');

        homePage.get('https://juliemr.github.io/protractor-demo/');

        browser.sleep(2000);
        homePage.enterFirstNumber(3);
        //element(by.model('first')).sendKeys('2');
        homePage.enterSecondNumber(4);
        //element(by.model('second')).sendKeys('5');
        homePage.clickGo();
        //element(by.css('[ng-click="doAddition()"]')).click();
        //let result= element(by.cssContainingText('.ng-binding','7'));
        //let result = element(by.css('.ng-binding'));
        //expect(result.getText()).toEqual('7')
        homePage.verifyResult('7');
        browser.sleep(3000);
    });

    it('Subtraction test', function () {
        homePage.get('https://juliemr.github.io/protractor-demo/');

        browser.sleep(2000);
        homePage.enterFirstNumber(3);
        
        homePage.enterSecondNumber(4);
        
        homePage.clickGo1();
    
        homePage.verifyResult('7');
        browser.sleep(3000);
    });
})