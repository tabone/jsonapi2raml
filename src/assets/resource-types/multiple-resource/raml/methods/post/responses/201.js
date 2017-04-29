'use strict'

/**
 * Contains info about the HTTP 201 Response that can be retrieved when making
 * an HTTP POST Request to `/{type}/`.
 * Ref: http://jsonapi.org/format/#crud-creating-responses-201
 * @type {Object}
 */
module.exports = {
  description: `HTTP Response returned when the provided JSON-API Resource ` +
    `is created. The Primary Data in the HTTP Response Body is the created ` +
    `JSON-API Resource.` +
    `\nMore Info: http://jsonapi.org/format/#crud-creating-responses-201`,
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
