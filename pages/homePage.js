let homePage = function () {
    let firstNumber_input = element(by.model('first'));
    let secondNumber_input = element(by.model('second'));
    let goButton = element(by.css('[ng-click="doAddition()"]'));
    let result = element(by.css('.ng-binding'));

    this.get = function (url) {
        browser.get(url);
    };
    this.enterFirstNumber = function (firstNumber) {
        firstNumber_input.sendKeys(firstNumber);
    };


    this.enterSecondNumber = function (secondNumber) {
        secondNumber_input.sendKeys(secondNumber);
    };

    this.clickGo = function () {
        goButton.click();
    };
    this.verifyResult = function (expectedResult) {
        expect(result.getText()).toEqual(expectedResult);
    };
};
module.exports = new homePage();
