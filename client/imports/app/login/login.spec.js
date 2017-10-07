"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var login_component_1 = require("./login.component");
describe('LoginComponent', function () {
    var loginCompoent;
    beforeEach(function () {
        loginCompoent = new login_component_1.LoginComponent();
    });
    it('LoginComponent should have private variable', function (done) {
        var someVar = loginCompoent.getVar();
        expect(someVar).toBe("ohayo!");
        done();
    });
});
//# sourceMappingURL=login.spec.js.map