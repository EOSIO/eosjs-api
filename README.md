[![Build Status](https://travis-ci.org/EOSIO/eosjs-api.svg?branch=master)](https://travis-ci.org/EOSIO/eosjs-api)
[![NPM](https://img.shields.io/npm/v/eosjs-api.svg)](https://www.npmjs.org/package/eosjs-api)

# Eos API

Application programming interface to EOS blockchain nodes.  This is mostly for read-only API calls.  If you decide you need to sign transactions, your better off using this API in the [eosjs](https://github.com/eosio/eosjs) package.

# Requirements

## api.Testnet()

Internet access

## api.Localnet()

Build and run [eosd](https://github.com/eosio/eos) or direct requests to a public testnet or production node.

## Usage

```javascript
api = require('eosjs-api') // Or api = require('./src')

testnet = api.Testnet() // See ./src/testnet.js for configuration

// Any API call without a callback parameter will print documentation: description,
// parameters, return value, and possible errors.  All methods and documentation
// are created from JSON files in eosjs/json/api/v1..
testnet.getInfo()

// A Promise is returned if a callback is not provided.
testnet.getInfo({}).then(result => console.log(result))
testnet.getBlock(1).then(result => console.log(result))

// For callbacks instead of Promises provide a callback
callback = (err, res) => {err ? console.error(err) : console.log(res)}

// The server does not expect any parameters only the callback is needed
testnet.getInfo(callback)

// Parameters are added before the callback
testnet.getBlock(1, callback)

// Parameters can be an object
testnet.getBlock({block_num_or_id: 1}, callback)
testnet.getBlock({block_num_or_id: 1}).then(result => console.log(result))
```

## Configuration

```js
api = require('eosjs-api') // Or api = require('./src')

// optional
options = {
  httpEndpoint: 'http://127.0.0.1:8888', // default
  debug: false,
  fetchConfiguration: {}
}

testnet = api.Localnet(options)

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
* [account_history.json](https://github.com/EOSIO/eosjs-api/blob/master/src/api/v1/account_history.json)

Helper functions:
* [./docs/index.md](./docs/index.md)

## Environment

Node 6+ and browser (browserify, webpack, etc)

## TODO

Automate code-coverage after a public testnet is available.
