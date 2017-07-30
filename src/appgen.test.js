/* eslint-env mocha */
const assert = require('assert')
const camelCase = require('camel-case')
const apiGen = require('./apigen')

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
              assert.equal(typeof api[methodName], 'function')
            })
          }
        })
      }
    })
  }
})

if(process.env['NODE_ENV'] === 'dev') {
  describe('fetch', () => {
    const definitions = apiVersions.v1
    const api = apiGen('v1', definitions)
    it('getBlock', (done) => {
      api.getBlock({block_num_or_id: 2}, (err, block) => {
        if(err) {
          throw err
        }
        console.log('block', block)
        done()
      })
    })
  })
}
