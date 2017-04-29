'use strict'

module.exports = {
  description: 'HTTP Response for when the request to create the' +
    'resource has been accepted, but the server has not completed the' +
    'creation by the time it responded.\n' +
    'More Info: http://jsonapi.org/format/#crud-creating-responses-202',
  headers: {
    'Content-Type': {
      description: 'JSON-API Content Type of HTTP Request ' +
        '(application/vnd.api+json)',
      example: 'application/vnd.api+json'
    }
  }
}
