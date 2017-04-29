'use strict'

/**
 * Contains info about the HTTP 204 Response that can be retrieved when making
 * an HTTP POST Request to `/{type}/`.
 * Ref: http://jsonapi.org/format/#crud-creating-responses-204
 * @type {Object}
 */
module.exports = {
  description: `HTTP Response returned when the provided JSON-API Resource ` +
    `has been created using a specified client generated ID.` +
    `\nMore Info: http://jsonapi.org/format/#crud-creating-responses-204`,
  headers: {
    'Content-Type': {
      description: 'JSON-API Content Type of HTTP Request ' +
        '(application/vnd.api+json)',
      example: 'application/vnd.api+json'
    }
  }
}
