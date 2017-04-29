'use strict'

module.exports = {
  description: 'HTTP Response for when the resource has been created, ' +
    'but unlike HTTP Status 201 the server did not provide the created ' +
    'resource in the HTTP Response Body.\n' +
    'More Info: http://jsonapi.org/format/#crud-creating-responses-204',
  headers: {
    'Content-Type': {
      description: 'JSON-API Content Type of HTTP Request ' +
        '(application/vnd.api+json)',
      example: 'application/vnd.api+json'
    }
  }
}
