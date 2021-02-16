import http from 'k6/http';
import { check, sleep } from 'k6';
const config = JSON.parse(open(`../config/${__ENV.STAGE}.env.json`));


export function homePage() {
  let res = http.get(`${config.env.url}`);
  check(res,{
    'response is code 200 : homePage': (res) => res.status == 200,
  })
  sleep(1);
}