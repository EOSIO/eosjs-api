const apiGen = require('./apigen')

module.exports = Localnet

const API_VERSION = 'v1'

Localnet.api = require('./api/v1')

// Change httpEndpoint to public testnet when available
const configDefaults = {httpEndpoint: 'http://127.0.0.1:8888'}

/**
  @arg {object} config
*/
function Localnet (config) {
  config = Object.assign({}, configDefaults, config)
  return apiGen(API_VERSION, Localnet.api, config)
}
