let dummyControlsPage = function () {

    let documentation = element(by.css('a[href="https://documentation.platformos.com"]'));
    
    this.get = function (url) {
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize()
        browser.get(url);
    };

    this.clickDocumentation = function () {
        documentation.click();
    }

    this.gotoDocumentationPage = function () {
        browser.getAllWindowHandles().then(function (handles) {
            expect(handles.length).toEqual(2);
            browser.switchTo().window(handles[1]).then(function () {
                expect(browser.getTitle()).toContain('Documentation');
            });
        });
    }

}
module.exports =new dummyControlsPage();