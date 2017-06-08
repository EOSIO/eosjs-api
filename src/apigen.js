require('isomorphic-fetch')
const camelCase = require('camel-case')

module.exports = apiGen

const configDefaults = {
  httpEndpoint: 'http://127.0.0.1:8888',
  debug: false
}

function apiGen (version, definitions, config) {
  config = Object.assign(configDefaults, config)
  const api = {}
  const {httpEndpoint} = config
  for (const apiGroup in definitions) {
    for (const apiMethod in definitions[apiGroup]) {
      const methodName = camelCase(apiMethod)
      const url = `${httpEndpoint}/${version}/${apiGroup}/${apiMethod}`
      api[methodName] = fetchMethod(methodName, url, definitions[apiGroup][apiMethod], config.debug)
    }
  }
  return api
}

function fetchMethod (methodName, url, definition, debug) {
  return function (...args) {
    if (args.length === 0) {
      console.error(usage(methodName, definition))
      return
    }
    const callParams = args.slice(0, args.length - 1)
    const callback = args[args.length - 1]
    if (typeof callback !== 'function') {
      throw new TypeError(`${methodName}: Callback function is required as the last argument`)
    }
    const apiParams = genParams(callParams, definition.params, methodName)
    const body = JSON.stringify(apiParams)
    fetch(url, {body, method: 'POST'}).then(response => {
      if (response.status >= 200 && response.status < 300) {
        return response.json()
      } else {
        return response.text().then(bodyResp => {
          const error = new Error(bodyResp)
          error.status = response.status
          error.statusText = response.statusText
          throw error
        })
      }
    }).then(objectResp => {
      if (debug) {
        console.error('api response =>', url, body, objectResp)
      }
      callback(null, objectResp)
    })
    .catch(error => {
      if (debug) {
        console.error('api error =>', url, body, error)
      }
      callback(error)
    })
  }
}

function usage (methodName, definition) {
  let usage = ''
  const out = str => {
    usage += str + '\n'
  }

  out(`USAGE`)
  out(`${methodName} - ${definition.brief}`)

  out('\nPARAMETERS')
  if (definition.params) {
    out(JSON.stringify(definition.params, null, 2))
  } else {
    out('none')
  }

  out('\nRETURNS')
  if (definition.results) {
    out(`${JSON.stringify(definition.results, null, 2)}`)
  } else {
    out(`no data`)
  }

  out('\nERRORS')
  if (definition.errors) {
    for (const error in definition.errors) {
      const errorDesc = definition.errors[error]
      out(`${error}${errorDesc ? ` - ${errorDesc}` : ''}`)
    }
  } else {
    out(`nothing special`)
  }

  return usage
}

function genParams (callParams, defParams, methodName) {
  let apiParams
  // Parameteters can be: object by name or a positional array
  if (callParams.length === 1 && typeof callParams[0] === 'object') {
    apiParams = callParams[0]
  } else {
    // positional array
    const defLen = defParams ? Object.keys(defParams).length : 0
    if (callParams.length > defLen) {
      throw new TypeError(`${methodName} is expecting ${defLen === 0 ? 'no' : defLen} parameters but ${callParams.length} where provided`)
    }
    apiParams = {}
    if (defParams) {
      let pos = 0
      for (const defParam in defParams) {
        if (callParams.length === pos) {
          break
        }
        apiParams[defParam] = callParams[pos]
        pos++
      }
    }
  }
  return apiParams
}
