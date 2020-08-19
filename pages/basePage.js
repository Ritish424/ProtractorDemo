let basePage=function(){

    this.gotoWebSite=function(url){
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
        browser.get(url);
    }

    this.hitEnter=function(){
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
    }

    this.click=function(element){
        element.click();
    }

    this.gotoSecondTab=function(){
        browser.getAllWindowHandles().then(function (handles) {
            browser.switchTo().window(handles[handles.length-1])
            });   
    }

    this.gotoFirstTab=function(){
        browser.getAllWindowHandles().then(function (handles) {
            browser.switchTo().window(handles[0])
            });   
    }
    this.isVisible=function(element) {
        return protractor.ExpectedConditions.visibilityOf(element);
    }
    this.closeSecondTab=function(){
        browser.getAllWindowHandles().then(function (handles) {
            browser.switchTo().window(handles[handles.length-1]);
            browser.close();
            });
    }
}
module.exports=new basePage();