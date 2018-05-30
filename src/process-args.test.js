/* eslint-env mocha */
const assert = require('assert')
const processArgs = require('./process-args')

describe('Process Args', function () {

  const args = [1, 2]
  const argNames = ['arg1', 'arg2']

  it('promise', () => {
    const r = processArgs(args, argNames)
    r.callback()
    return r.returnPromise
  })

  it('arg array', () => {
    const r1 = processArgs(args, argNames, 'method')
    assert.equal(r1.params.arg1, 1)
    assert.equal(r1.params.arg2, 2)
  })

  it('arg object', () => {
    const r1 = processArgs([{arg1: 1, arg2: 2}], argNames, 'method')
    assert.equal(r1.params.arg1, 1)
    assert.equal(r1.params.arg2, 2)
  })

  it('options', () => {
    const argsOption = [1, 2, {options: true}]

    // has option but no optionFormater
    throws(() => processArgs(argsOption, argNames, 'method'),
      /expecting 2 parameters but 3 where provided/)

    const optionsFormatter = option => option

    const r = processArgs(argsOption, argNames, 'method', optionsFormatter)
    assert.deepEqual(r.params, {arg1: 1, arg2: 2})
    assert.deepEqual(r.options, {options: true})
  })

  it('callback', done => {
    const callback = (err, res) => {if(!err) {done()} else {console.error(err)}}
    const argsCallback = [1, 2, callback]

    const r = processArgs(argsCallback, argNames)
    assert.deepEqual(r.params, {arg1: 1, arg2: 2})
    r.callback()
  })

  it('callback object', done => {
    const callback = (err, res) => {if(!err) {done()} else {console.error(err)}}
    const argsCallback = [{arg1: 1, arg2: 2, arg3: 3}, callback]

    const r = processArgs(argsCallback, ['arg1', 'arg2', 'arg3'])
    assert.deepEqual(r.params, {arg1: 1, arg2: 2, arg3: 3})
    r.callback()
  })

  it('callback error', done => {
    const callback = (err, res) => {if(err) {} else {throw 'expecting error'}}
    const argsCallback = [1, 2, callback]

    const r = processArgs(argsCallback, argNames)
    assert.deepEqual(r.params, {arg1: 1, arg2: 2})
    r.callback('error')
    done()
    // r.returnPromise.catch(error => {done()})
  })

  it('array with options and callback', (done) => {
    const callback = (err, res) => {if(!err) {done()} else {console.error(err)}}
    const argsOptionCallback = [1, 2, {options: true}, callback]
    const optionsFormatter = option => option

    const r = processArgs(argsOptionCallback, argNames, 'method', optionsFormatter)
    assert.deepEqual(r.params, {arg1: 1, arg2: 2})
    assert.equal(r.options.options, true)
    r.callback()
  })

  it('object with options and callback', (done) => {
    const callback = (err, res) => {if(!err) {done()} else {console.error(err)}}
    const argsOptionCallback = [{arg1: 1, arg2: 2}, {options: true}, callback]
    const optionsFormatter = option => option

    const r = processArgs(argsOptionCallback, argNames, 'method', optionsFormatter)
    assert.deepEqual(r.params, {arg1: 1, arg2: 2})
    assert.equal(r.options.options, true)
    r.callback()
  })

  it('object with missing options', () => {
    const argsOptionCallback = [{arg1: 1, arg2: 2}]
    const optionsFormatter = option => option

    const r = processArgs(argsOptionCallback, argNames, 'method', optionsFormatter)
    assert.deepEqual(r.params, {arg1: 1, arg2: 2})
    r.callback()
    return r.returnPromise
  })

})



/* istanbul ignore next */
function throws (fn, match) {
  try {
    fn()
    assert(false, 'Expecting error')
  } catch (error) {
    if (!match.test(error)) {
      error.message = `Error did not match ${match}\n${error.message}`
      throw error
    }
  }
}
