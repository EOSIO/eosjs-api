/* eslint-env mocha */

const apiGen = require('./apigen')
const camelCase = require('camel-case')

const apiVersions = {
  v1: require(`eosjson/api/v1`)
}

describe('API Generator', function () {
  for (const version in apiVersions) {
    describe(version, function () {
      const definitions = apiVersions[version]
      const api = apiGen(version, definitions)
      for (const apiGroup in definitions) {
        describe(apiGroup, function () {
          for (const apiMethod in apiVersions[version][apiGroup]) {
            const methodName = camelCase(apiMethod)
            it(methodName, function () {
              api[methodName]()
            })
          }
        })
      }
    })
  }
})
