'use strict'

/**
 * Contains info about the HTTP 202 Response that can be retrieved when making
 * an HTTP PATCH Request to `/{type}/{id}/relationships/{relationship-name}/`
 * when the relationship is a To-One relationship.
 * Ref: http://jsonapi.org/format/#crud-updating-relationship-responses-202
 * @type {Object}
 */
module.exports = {
  description: 'HTTP Response returned when the provided JSON-API Resource ' +
    `has been accepted to be updated, but it hasn't yet by the time the HTTP ` +
    `Response has been sent.` +
    `\nMore Info:` +
    `http://jsonapi.org/format/#crud-updating-relationship-responses-202`,
  headers: {
    'Content-Type': {
      description: 'JSON-API Content Type of HTTP Request ' +
        '(application/vnd.api+json)',
      example: 'application/vnd.api+json'
    }
  }
}
