
// Example test flows
// Step 1 HomePage
// Step 2 Login
// Step 3 Authentication

import { group } from 'k6';
import {homePage} from '../services/homePage.js'
import {loginPagePOST, loginPageGET, logoutPagePOST} from '../services/loginPage.js'

export let options = {
    vus: 1,
    duration: '1s',
};

export default function () {
    let token;
    let newtoken;

    group('Scenario Test',function(){
        group('HomePage Test', function(){
            homePage();
        })

        group('LoginPage - LogoutPage Test', function(){
            token = loginPageGET();
            newtoken = loginPagePOST(token);
            logoutPagePOST(newtoken);
        })
    })
}