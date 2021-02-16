
// Example test flows
// Step 1 HomePage
// Step 2 Login
// Step 3 Authentication

import { group } from 'k6';
import {homePage} from '../services/homePage.js'
import {loginPagePOST, loginPageGET, logoutPagePOST} from '../services/loginPage.js'

export let options = {
    stages: [
        // Ramp-up from 1 to 5 VUs in 5s
        { duration: "5s", target: 5 },
        // Stay at rest on 5 VUs for 10s
        { duration: "10s", target: 5 },
        // Ramp-down from 5 to 0 VUs for 5s
        { duration: "5s", target: 0 }
    ]
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