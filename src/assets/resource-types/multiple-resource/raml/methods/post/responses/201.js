'use strict'

module.exports = {
  description: 'HTTP Response for when the resource has been created.\n' +
    'More Info: http://jsonapi.org/format/#crud-creating-responses-201',
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
