'use strict'

module.exports = {
  description: 'HTTP Response for when the request to update the' +
    'resource has been accepted, but the server has not completed the' +
    'modification by the time it responded.\n' +
    'More info: http://jsonapi.org/format/#crud-updating-responses-202',
  headers: {
    'Content-Type': {
      description: 'JSON-API Content Type of HTTP Request ' +
        '(application/vnd.api+json)',
      example: 'application/vnd.api+json'
    }
  }
}
