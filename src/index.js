const api = require('./api/v1')
const apiGen = require('./apigen')
const processArgs = require('./process-args')

const EosApi = function(config) {
  return apiGen('v1', api, config)
}

Object.assign(
  EosApi,
  {
    processArgs,
    api,

    /** @deprecated */
    Testnet: function (config) {
      console.error('deprecated, change EosApi.Testnet(..) to just EosApi(..)')
      return EosApi(config)
    },

    /** @deprecated */
    Localnet: function (config) {
      console.error('deprecated, change EosApi.Localnet(..) to just EosApi(..)')
      return EosApi(config)
    }
  }
)

module.exports = EosApi
