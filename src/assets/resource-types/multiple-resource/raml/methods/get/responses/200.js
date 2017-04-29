'use strict'

module.exports = {
  description: 'HTTP Response when resource type exists.\nMore info:' +
    'http://jsonapi.org/format/#fetching-resources-responses-200',
  headers: {
    'Content-Type': {
      description: 'JSON-API Content Type of HTTP Request ' +
        '(application/vnd.api+json)',
      example: 'application/vnd.api+json'
    }
  },
  body: {
    type: '<<multiple>>'
  }
}
