/* eslint-env mocha */
const assert = require('assert')
const camelCase = require('camel-case')
const apiGen = require('./apigen')

const apiVersions = {
  v1: require(`./api/v1`)
}

describe('API Generator', function() {
  it('usage', function (done) {
    const api = apiGen('v1', apiVersions.v1, {logger: {log: usage => {
      if(/USAGE/.test(usage)) {
        done()
      }
    }}})
    api.getInfo() // no args triggers usage
  })

  it('optionsFormatter', function () {
    const api = apiGen('v1', apiVersions.v1)
    api.getInfo(true)
  })

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

if(process.env['NODE_ENV'] === 'development') {
  describe('fetch', () => {
    const definitions = apiVersions.v1
    const config = {fetchConfiguration: {credentials: 'same-origin'}}
    const api = apiGen('v1', definitions, config)

    it('getBlock', (done) => {
      api.getBlock({block_num_or_id: 2}, (err, block) => {
        if(err) {
          throw err
        }
        assert(block.id, 'block.id')
        done()
      })
    })
  })

  it('logging', function (done) {
    let debugLog, apiLog
    const config = {
      debug: true, // enables verbose debug logger
      logger: {
        debug: () => {
          debugLog = true
        },
        error: (err) => {
          assert.equal(err, 'callback error')
          done()
        }
      },
      apiLog: () => {
        apiLog = true
      }
    }

    const api = apiGen('v1', apiVersions.v1, config)

    api.getBlock(1, () => {
      assert(debugLog, 'debugLog')
      assert(apiLog, 'apiLog')
      throw 'callback error'
    })
  })

  it('api promise error', function () {
    let errorLog, apiLog
    const config = {
      logger: {error: e => {
        errorLog = true
      }},
      apiLog: (error) => {
        apiLog = true
      }
    }
    const api = apiGen('v1', apiVersions.v1, config)
    return api.getBlock('a').catch(e => {
      assert(errorLog, 'errorLog')
      assert(apiLog, 'apiLog')
    })
  })

  it('api callback error', function () {
    let errorLog
    const config = {logger: {error: e => {
      errorLog = true
    }}}
    const api = apiGen('v1', apiVersions.v1, config)
    return api.getBlock('a', error => {
      throw new Error('callback error')
    })
  })
}
