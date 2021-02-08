import http from 'k6/http';
import { parseHTML } from 'k6/html';
import { check, sleep } from 'k6';


const data = JSON.parse(open('../data/test/user.json'));

export function loginPageGET() {
    let res = http.get('https://test.k6.io/my_messages.php');

    const doc = parseHTML(res.body);
    const redir = doc.find('body > form > input[type=hidden]:nth-child(1)').attr('value');
    const csrftoken = doc.find('body > form > input[type=hidden]:nth-child(2)').attr('value');

    check(res,{
    'response is code 200 : loginPageGET': (res) => res.status == 200,
    });

    sleep(1);
    return [csrftoken,redir];
}


export function loginPagePOST(token){

    let position = Math.floor(Math.random()*data.users.length);
    let credentials = data.users[position];
    let csrftoken = token[0];
    let redir = token[1];

    let formData = {redir: redir, csrftoken: csrftoken,login: credentials.username,password:credentials.password};
    let headers = { 'Content-Type': 'application/x-www-form-urlencoded' };

    let res = http.post('https://test.k6.io/login.php',formData,{headers: headers});

    const doc = parseHTML(res.body);
    const newcsrftoken = doc.find('body > form > input[type=hidden]:nth-child(2)').attr('value');

    check(res, {
        'response is code 200 : loginPagePOST': (res) => res.status === 200,
        'login succeeded': (res) => res.body.indexOf("Welcome, admin!") !== -1
    });
    sleep(2);
    return newcsrftoken;
}

export function logoutPagePOST(token){

    let formData = {redir: '1', csrftoken: token};

    let headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
    let res = http.post('https://test.k6.io/login.php',formData,{headers: headers});

    check(res, {
        'response is code 200 : logoutPagePOST': (res) => res.status === 200,
        'logout succeeded': (res) => res.body.indexOf("Unauthorized") !== -1
    });

    sleep(2);
}