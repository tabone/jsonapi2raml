'use strict'

/**
 * Contains info about the HTTP 200 Response that can be retrieved when making
 * an HTTP GET Request to `/{type}/{id}/`.
 * Ref: http://jsonapi.org/format/#fetching-resources-responses-200
 * @type {Object}
 */
module.exports = {
  description: `HTTP Response returned when '{type}' is a valid JSON-API ` +
    `Resource type. If there is a JSON-API Resource with the same '{type}' & ` +
    `'{id}', it is shown as a Primary Data in the HTTP Response Body. If ` +
    `there isn't, the Primary Data is set to 'null'.` +
    '\nMore info: http://jsonapi.org/format/#fetching-resources-responses-200',
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
