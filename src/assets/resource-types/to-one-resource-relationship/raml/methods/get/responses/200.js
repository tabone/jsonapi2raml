'use strict'

module.exports = {
  description: 'HTTP Response when related resource exists.\n' +
    'More info: ' +
    'http://jsonapi.org/format/#fetching-resources-responses-200',
  headers: {
    'Content-Type': {
      description: 'JSON-API Content Type of HTTP Request ' +
        '(application/vnd.api+json)',
      example: 'application/vnd.api+json'
    }
  },
  body: {
    type: '<<single>>'
  }
}
