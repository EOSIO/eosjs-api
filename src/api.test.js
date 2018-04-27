/* eslint-env mocha */
const assert = require('assert')
const camelCase = require('camel-case')

const apiVersions = {
  v1: require(`./api/v1`)
}

/**
  API implementations may combine all methods into one object for a better UX.  This will alert us of duplicate method names.  A methodName attribute can be added in the json definition that will rename the API method without affecting the request sent to the server.
*/
describe('no duplicate method names', function () {
  for (const version in apiVersions) {
    describe(version, function () {
      const dups = {}
      const definitions = apiVersions[version]
      for (const apiGroup in definitions) {
        describe(apiGroup, function () {
          for (const apiMethod in definitions[apiGroup]) {
            it(apiMethod, function () {
              const methodName = camelCase(apiMethod)
              const methodRename = definitions[apiGroup][apiMethod].methodName
              const name = methodRename != null ? methodRename : methodName
              const dup = dups[name]
              assert(!dup, `Duplicate method api/${version}/${apiGroup}.json::${apiMethod}`)
              dups[name] = true
            })
          }
        })
      }
    })
  }
})
