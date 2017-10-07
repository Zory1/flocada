import { LoginComponent } from './login.component';
import {} from 'jasmine';

describe('LoginComponent', () => {
    let loginCompoent: LoginComponent;

    beforeEach(() => {
        loginCompoent = new LoginComponent();
    })

    it('LoginComponent should have private variable', (done) => {
        let someVar = loginCompoent.getVar();
            expect(someVar).toBe("ohayo!");
            done();
        })
    })
