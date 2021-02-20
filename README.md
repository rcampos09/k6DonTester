# K6 Load Testing Example

[![N|Solid](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGam8KYS345ev11TiFafeBonvX0us_uRq0ew&usqp=CAU)](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGam8KYS345ev11TiFafeBonvX0us_uRq0ew&usqp=CAU)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Project example create in k6 load testing

* [k6] - k6 is a developer-centric, free and open-source load testing tool built for making performance testing a productive and enjoyable experience.

Using page example https://test.k6.io for generate load test: warning: please do not load real

## Installation Local K6:

Mac 
```sh
$ brew install k6

```
## Run test Scenario K6:
Mac 
```sh
$ k6 run -e MY_HOSTNAME=https://test.k6.io -e STAGE=https:local scenario/scenarioTest1.js

```

## Docker Monitoring Execution Scenario K6 Manual:

Influx db

```sh
docker run -d --name=my-influxdb-k6 -p 8086:8086 -v influxdb:/var/lib/ influxdbk6
```

Grafana
```sh
docker run -d --name=my-grafana-k6 -p 3000:3000 grafana-custom
```

## Docker Monitoring Execution Scenario K6 Script (simple):

installation sh
```sh
sh installation.sh
```

## Runtest Scenario K6 and monitoring in dashboard grafana:

installation sh
```sh
k6 run --out influxdb=http://localhost:8086/myk6db scenario/scenarioTest1.js -e STAGE=local
```


   [k6]: <https://k6.io/>
[<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg' alt='github' height='40'>](https://github.com/rcampos09)  [<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg' alt='linkedin' height='40'>](https://www.linkedin.com/in/rcampostapia/)  