'use strict'

/**
 * Contains info about the HTTP 200 Response that can be retrieved when making
 * an HTTP GET Request to `/{type}/{id}/{relationship-name}/` when the
 * relationship is a To-Many relationship.
 * Ref: http://jsonapi.org/format/#fetching-resources-responses-200
 * @type {Object}
 */
module.exports = {
  description: `HTTP Response returned when the requested JSON-API To-Many ` +
    `Relationship exist. The Primary Data in the HTTP Response Body is an ` +
    `array of JSON-API Resources that are part of the requested to-many ` +
    `relationship.` +
    `\nMore Info: http://jsonapi.org/format/#fetching-resources-responses-200`,
  headers: {
    'Content-Type': {
      description: 'JSON-API Content Type of HTTP Request ' +
        '(application/vnd.api+json)',
      example: 'application/vnd.api+json'
    }
  },
  body: {
    type: '<<multiple>>'
  }
}
