const apiGen = require('./apigen')

module.exports = Testnet

const API_VERSION = 'v1'

Testnet.api = require('eosjs-json/api/v1')
Testnet.schema = require('eosjs-json/schema')

const configDefaults = {httpEndpoint: 'http://testnet1.eos.io'}

/**
  @arg {object} config
*/
function Testnet (config) {
  config = Object.assign({}, configDefaults, config)
  return apiGen(API_VERSION, Testnet.api, config)
}
