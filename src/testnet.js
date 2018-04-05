const apiGen = require('./apigen')
const isBrowser = require('is-browser')

module.exports = Testnet

const API_VERSION = 'v1'

Testnet.api = require('eosjs-json/api/v1')
Testnet.schema = require('eosjs-json/schema')

// Always use SSL unless a browser protocol is 'http'
const protocol = isBrowser &&
  location.protocol === 'http:' ? 'http' : 'https'

const configDefaults = {httpEndpoint: `${protocol}://t1readonly.eos.io`}

/**
  @arg {object} config
*/
function Testnet (config) {
  config = Object.assign({}, configDefaults, config)
  return apiGen(API_VERSION, Testnet.api, config)
}
