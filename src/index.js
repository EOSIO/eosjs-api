const Testnet = require('./testnet')
const Localnet = require('./localnet')
const processArgs = require('./process-args')
const api = require('./api')

module.exports = {
  Testnet,
  Localnet,
  processArgs,
  api
}
