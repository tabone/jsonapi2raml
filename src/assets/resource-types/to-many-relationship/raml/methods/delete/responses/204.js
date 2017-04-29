'use strict'

/**
 * Contains info about the HTTP 204 Response that can be retrieved when making
 * an HTTP DELETE Request to `/{type}/{id}/relationships/{relationship-name}/`
 * when the relationship is a To-Many relationship.
 * Ref: http://jsonapi.org/format/#crud-updating-relationship-responses-204
 * @type {Object}
 */
module.exports = {
  description: `HTTP Response returned when the proposed changes are already ` +
    `persisted.\nMore Info:` +
    'http://jsonapi.org/format/#crud-updating-relationship-responses-204',
  headers: {
    'Content-Type': {
      description: 'JSON-API Content Type of HTTP Request ' +
        '(application/vnd.api+json)',
      example: 'application/vnd.api+json'
    }
  }
}
