import http from 'k6/http';
import { check, sleep } from 'k6';


export function homePage() {
  let res = http.get('https://test.k6.io/');
  check(res,{
    'response is code 200 : homePage': (res) => res.status == 200,
  })
  sleep(1);
}