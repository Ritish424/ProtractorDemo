let dummy = require('../pages/dummyControlsPage');

describe('Web Page handles test', function () {

    it('Go to new Tab page', function () {

        dummy.get('https://examples.platform-os.com/sign-in');
        dummy.clickDocumentation();
        dummy.gotoDocumentationPage();
    
    })

})