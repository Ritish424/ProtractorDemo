let base=require('../pages/basePage')

let dummyControlsPage = function () {

    let documentation = element(by.css('a[href="https://documentation.platformos.com"]'));
    let searchBox=element(by.id('query'));
    
    // this.get = function (url) {
    //     browser.ignoreSynchronization = true;
    //     browser.manage().window().maximize()
    //     browser.get(url);
    // };


    // this.clickDocumentation = function () {
    //     documentation.click();
    // }

    this.clickDocumentation=function(){
        base.click(documentation)
    }
    // this.gotoDocumentationPage = function () {
    //     browser.getAllWindowHandles().then(function (handles) {
    //         expect(handles.length).toEqual(2);
    //         browser.switchTo().window(handles[1]).then(function () {
    //             expect(browser.getTitle()).toContain('Documentation');
    //         });
    //     });
    // }

    this.gotoDocumentationPage=function(){
        base.gotoSecondTab();
    }

    this.gotoLoginPage=function(){
        base.gotoFirstTab();
    }
    this.waitforSearchBox=function(){
        base.isVisible(searchBox);
    }
    this.searchForValue=function(text){
        searchBox.sendKeys(text);
    }
    this.closeDocumentationPage=function(){
        base.closeSecondTab();
    }
}
module.exports =new dummyControlsPage();