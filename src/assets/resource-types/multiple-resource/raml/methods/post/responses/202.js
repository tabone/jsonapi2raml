'use strict'

/**
 * Contains info about the HTTP 202 Response that can be retrieved when making
 * an HTTP POST Request to `/{type}/`.
 * Ref: http://jsonapi.org/format/#crud-creating-responses-202
 * @type {Object}
 */
module.exports = {
  description: 'HTTP Response returned when the provided JSON-API Resource ' +
    `has been accepted to be created, but it hasn't yet by the time the HTTP ` +
    `Response has been sent.` +
    `\nMore Info: http://jsonapi.org/format/#crud-creating-responses-202`,
  headers: {
    'Content-Type': {
      description: 'JSON-API Content Type of HTTP Request ' +
        '(application/vnd.api+json)',
      example: 'application/vnd.api+json'
    }
  }
}
