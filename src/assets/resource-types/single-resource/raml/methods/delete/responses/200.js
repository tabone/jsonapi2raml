'use strict'

/**
 * Contains info about the HTTP 200 Response that can be retrieved when making
 * an HTTP DELETE Request to `/{type}/{id}/`.
 * Ref: http://jsonapi.org/format/#crud-deleting-responses-200
 * @type {Object}
 */
module.exports = {
  description: `HTTP Response returned when the JSON-API Resource is deleted.` +
    `\nMore info: http://jsonapi.org/format/#crud-deleting-responses-200`,
  headers: {
    'Content-Type': {
      description: 'JSON-API Content Type of HTTP Request ' +
        '(application/vnd.api+json)',
      example: 'application/vnd.api+json'
    }
  }
}
