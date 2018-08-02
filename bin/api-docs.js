#!/usr/bin/env node
const api = require('../src/api')

const camelCase = require('camel-case')

function normalize(obj) {
  if(typeof obj === 'string') {
    obj = {type: obj, default: null, doc: ''}
  } else {
    // assert.equal(typeof obj, 'object')
    if(obj.default == null) {
      obj.default = null
    }
    if(obj.doc == null) {
      obj.doc = ''
    }
    // if(obj.type === undefined) {
    //   obj.type = null
    // }
  }

  obj.optional = /\?$/.test(obj.type) // ends in ?
  if(obj.optional) {
    obj.type = obj.type.substring(0, obj.type.length - 1) // remove ?
  }
  if(/\[\]$/.test(obj.type)) { // asset[]
    obj.type = `Array<${obj.type.substring(0, obj.type.length - 2)}>`
  } else {
    obj.type = obj.type.replace('[', '<').replace(']', '>') //set<public_key>
  }
  return obj
}

function out(str = '') {
  console.log(str.trim())
}

function outln(str = '') {
  console.log(str.trim() + '\n')
}

function outJsDoc(tag, params, paramNames) {
  for(const name in params) {
    const typedef = normalize(params[name])

    // console.error('outJsDoc', tag, typedef, paramNames);

    const paramName = name.replace(/\[\]$/, '')
    const paramNameDefault = typedef.default == null ?
      paramName : `${paramName} = ${typedef.default}`

    const paramNameDefaultRequired =
      typedef.optional || typedef.default != null ?
        `[${paramNameDefault}]` : paramNameDefault

    const doc = typedef.doc ? ` - ${typedef.doc.trim()}` : ''
    const typeName = typedef.type
    out(`${tag} {${typeName}} ${paramNameDefaultRequired}${doc}`)
    if(paramNames) {
      paramNames.push(paramName)
    }
  }
}

outln('// Generated file, see bin/api-docs.js')

out('/** @namespace */')
outln('var eos = {}')

out(`/** @typedef {Buffer|hex} bytes  */`)
outln()

for(const version in api) {
  for(const plugin in api[version]) {
    for(const method in api[version][plugin]) {
      const {brief, params, results} = api[version][plugin][method]
      const functionName = camelCase(method)

      if(typeof results === 'object') {
        out('/**')
        out(`@typedef {object} ${functionName}Result`)
        outJsDoc('@property', results)
        outln('*/')
      }

      out('/**')
      // console.log('API', version, plugin, method, JSON.stringify({brief, params, results}) + '\n')
      if(brief != null) {
        outln(brief)
      }

      out('@async')
      out('@memberof eos')
      out()

      const paramNames = []
      if(params) {
        outJsDoc('@arg', params, paramNames)
        out()
      }

      if(results) {
        if(typeof results === 'string') {
          const typeName = normalize(results).type
          outln(`@return {${typeName}}`)
        } else {
          outln(`@return {${functionName}Result}`)
        }
      }

      outln(`@example url_path: \`/${version}/${plugin}/${method}\``)

      if(params) {
        out('@example ```js')
        out(`eos.${functionName}(${paramNames.join(', ')})`)
        outln('```')
      } else {
        out('@example ```js')
        out(`eos.${functionName}({})`)
        outln('```')
      }

      out('*/')
      out(`function ${functionName}(${paramNames.join(', ')}) {}`)
      out()

    }
  }
}
