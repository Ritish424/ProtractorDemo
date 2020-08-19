let dummy = require('../pages/dummyControlsPage');
let base = require('../pages/basePage');

describe('Web Page handles test', function () {

    it('Go to new Tab page', function () {

        //dummy.get('https://examples.platform-os.com/sign-in');
        base.gotoWebSite('https://examples.platform-os.com/sign-in');
        dummy.clickDocumentation();
        dummy.gotoDocumentationPage();
        dummy.waitforSearchBox();
        dummy.searchForValue('a');
        dummy.gotoLoginPage();
    })

})