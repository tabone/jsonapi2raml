'use strict'

/**
 * Contains info about the HTTP 204 Response that can be retrieved when making
 * an HTTP PATCH Request to `/{type}/{id}/`.
 * Ref: http://jsonapi.org/format/#crud-updating-responses-204
 * @type {Object}
 */
module.exports = {
  description: `HTTP Response returned when the JSON-API Resource has been ` +
    `updated as specified by the HTTP Request done.` +
    `\nMore info: http://jsonapi.org/format/#crud-updating-responses-204`,
  headers: {
    'Content-Type': {
      description: 'JSON-API Content Type of HTTP Request ' +
        '(application/vnd.api+json)',
      example: 'application/vnd.api+json'
    }
  }
}
