'use strict'

module.exports = {
  description: 'HTTP Response for when the resource has been deleted, ' +
    'but unlike HTTP Status 200 the server did not provide anything ' +
    'in the HTTP Response Body.\n' +
    'More info: http://jsonapi.org/format/#crud-deleting-responses-204',
  headers: {
    'Content-Type': {
      description: 'JSON-API Content Type of HTTP Request ' +
        '(application/vnd.api+json)',
      example: 'application/vnd.api+json'
    }
  }
}
