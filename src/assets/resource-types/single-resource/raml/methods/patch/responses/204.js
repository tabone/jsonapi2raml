'use strict'

module.exports = {
  description: 'HTTP Response for when the resource has been updated, ' +
    'but unlike HTTP Status 200 the server did not provide the updated ' +
    'resource in the HTTP Response Body.\n' +
    'More info: http://jsonapi.org/format/#crud-updating-responses-204',
  headers: {
    'Content-Type': {
      description: 'JSON-API Content Type of HTTP Request ' +
        '(application/vnd.api+json)',
      example: 'application/vnd.api+json'
    }
  }
}
