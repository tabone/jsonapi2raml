'use strict'

module.exports = {
  description: 'HTTP Response for when the relationship has been ' +
    'added, but unlike HTTP Status 200 the server did not provide the ' +
    'updated relationships in the HTTP Response Body.\n' +
    'More Info:' +
    'http://jsonapi.org/format/#crud-updating-relationship-responses-204',
  headers: {
    'Content-Type': {
      description: 'JSON-API Content Type of HTTP Request ' +
        '(application/vnd.api+json)',
      example: 'application/vnd.api+json'
    }
  }
}
