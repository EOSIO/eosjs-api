[![Build Status](https://travis-ci.org/EOSIO/eosjs-api.svg?branch=master)](https://travis-ci.org/EOSIO/eosjs-api)
[![NPM](https://img.shields.io/npm/v/eosjs-api.svg)](https://www.npmjs.org/package/eosjs-api)

# Eos API

Application programming interface to EOS blockchain nodes.  This is for
read-only API calls.  If you need to sign transactions use
[eosjs](https://github.com/eosio/eosjs) instead.

# Requirements

## EosApi

Run [nodeos](https://github.com/eosio/eos)

## Usage

```javascript
EosApi = require('eosjs-api') // Or EosApi = require('./src')

eos = EosApi() // // 127.0.0.1:8888

// Any API call without a callback parameter will print documentation: description,
// parameters, return value, and possible errors.  All methods and documentation
// are created from JSON files in eosjs/json/api/v1..
eos.getInfo()

// A Promise is returned if a callback is not provided.
eos.getInfo({}).then(result => console.log(result))
eos.getBlock(1).then(result => console.log(result))

// For callbacks instead of Promises provide a callback
callback = (err, res) => {err ? console.error(err) : console.log(res)}

// The server does not expect any parameters only the callback is needed
eos.getInfo(callback)

// Parameters are added before the callback
eos.getBlock(1, callback)

// Parameters can be an object
eos.getBlock({block_num_or_id: 1}, callback)
eos.getBlock({block_num_or_id: 1}).then(result => console.log(result))
```

## Configuration

```js
EosApi = require('eosjs-api') // Or EosApi = require('./src')

// everything is optional
options = {
  httpEndpoint: 'http://127.0.0.1:8888', // default
  debug: false, // API logging
  logger: { // Default logging functions
    log: console.log,
    error: console.error,
    debug: console.debug
  },
  fetchConfiguration: {}
}

eos = EosApi(options)
```
### options.logger example

During testing, an error may be expected and checked as follows:

```js
options.logger = {
  error: err => {
    assert.equal(err, 'expected error')
  }
}
```

### options.fetchConfiguration example

```js
options.fetchConfiguration = {
  credentials: 'same-origin'
}
```
Every eosjs-api request will run [fetch](https://github.com/github/fetch#sending-cookies) with this configuration:
```js
fetch('https://example.com', {
  credentials: 'same-origin'
})
```

## API Documentation

API methods and documentation are generated from:
* [chain.json](https://github.com/EOSIO/eosjs-api/blob/master/src/api/v1/chain.json)
* [history.json](https://github.com/EOSIO/eosjs-api/blob/master/src/api/v1/history.json)

Helper functions:
* [./docs/index.md](./docs/index.md)

## Environment

Node and browser (es2015)
