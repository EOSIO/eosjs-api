/* eslint-env mocha */
const assert = require('assert')
const camelCase = require('camel-case')
const apiGen = require('./apigen')

const apiVersions = {
  v1: require(`./api/v1`)
}

describe('API Generator', function() {
  it('usage', function (done) {
    const api = apiGen('v1', apiVersions.v1)
    api.getInfo() // no args triggers usage
    done()
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
  let apiLog
  const config = {
    verbose: true,
    logger: {
      log: (...args) => {
        // console.log(...args)
        apiLog = true
      },
      error: (...err) => {
        // console.log(...err)
        assert(/callback error/.test(err.join(' ')), 'callback error')
        done()
      }
    }
  }

  const api = apiGen('v1', apiVersions.v1, config)

  api.getBlock(1, () => {
    assert(apiLog, 'apiLog')
    throw 'callback error'
  })
})

it('api promise error', async function () {
  let errorLog, apiLog
  const config = {
    logger: {
      error: e => {
        errorLog = true
      },
      log: s => {
        apiLog = true
      }
    }
  }
  const api = apiGen('v1', apiVersions.v1, config)

  await api.getBlock(1)
  assert(apiLog, 'apiLog')
  assert(!errorLog, '!errorLog')

  await api.getBlock('a').catch(e => {
    assert(errorLog, 'errorLog')
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
