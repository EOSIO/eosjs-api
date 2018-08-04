require('isomorphic-fetch')
const camelCase = require('camel-case')
const helpers = require('./exported-helpers')
const processArgs = require('./process-args')

module.exports = apiGen

function apiGen (version, definitions, config = {}) {
  const configDefaults = {
    httpEndpoint: 'http://127.0.0.1:8888',
    verbose: false,
    logger: {
      log: (...args) => config.verbose ? console.log(...args) : null,
      error: (...args) => config.verbose ? console.error(...args) : null
    }
  }

  function applyDefaults(target, defaults) {
    Object.keys(defaults).forEach(key => {
      if(target[key] === undefined) {
        target[key] = defaults[key]
      }
    })
  }

  applyDefaults(config, configDefaults)
  applyDefaults(config.logger, configDefaults.logger)

  const api = {}
  const {httpEndpoint} = config

  for (const apiGroup in definitions) {
    for (const apiMethod in definitions[apiGroup]) {
      const methodName = camelCase(apiMethod)
      const url = `${httpEndpoint}/${version}/${apiGroup}/${apiMethod}`
      api[methodName] = fetchMethod(methodName, url, definitions[apiGroup][apiMethod], config)
    }
  }
  for(const helper in helpers.api) {
    // Insert `api` as the first parameter to all API helpers
    api[helper] = (...args) => helpers.api[helper](api, ...args)
  }
  return api
}

function fetchMethod (methodName, url, definition, config) {
  const {logger} = config

  return function (...args) {
    if (args.length === 0) {
      console.log(usage(methodName, definition))
      return
    }

    const optionsFormatter = option => {
      if(typeof option === 'boolean') {
        return {broadcast: option}
      }
    }

    const processedArgs = processArgs(args, Object.keys(definition.params || []), methodName, optionsFormatter)

    const {params, options, returnPromise} = processedArgs
    let {callback} = processedArgs

    const body = JSON.stringify(params)
    if (logger.log) {
      logger.log('api >', 'post', '\t', url, body)
    }
    const fetchConfiguration = {body, method: 'POST'}
    Object.assign(fetchConfiguration, config.fetchConfiguration)

    fetch(url, fetchConfiguration).then(response => {
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
      if (logger.log) {
        logger.log('api <', 'response', '\t', url, JSON.stringify(objectResp))
      }
      try {
        callback(null, objectResp)
      } catch(callbackError) {
        if(logger.error) {
          logger.error('api <', 'result callback', ':', callbackError)
        }
      }
    })
    .catch(error => {
      let message = ''
      try {
        // nodeos format (fail safe)
        message = JSON.parse(error.message).error.details[0]
      } catch(e2) {}

      if(logger.error) {
        logger.error('api <', 'error', '\t', message, url, body)
        logger.error(error)
      }

      try {
        callback(error)
      } catch(callbackError) {
        if(logger.error) {
          logger.error('api <', 'error callback', ':', callbackError)
        }
      }
    })

    return returnPromise
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
