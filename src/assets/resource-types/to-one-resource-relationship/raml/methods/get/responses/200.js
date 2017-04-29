'use strict'

/**
 * Contains info about the HTTP 200 Response that can be retrieved when making
 * an HTTP GET Request to `/{type}/{id}/{relationship-name}/` when the
 * relationship is a To-One relationship.
 * Ref: http://jsonapi.org/format/#fetching-resources-responses-200
 * @type {Object}
 */
module.exports = {
  description: `HTTP Response returned when the requested JSON-API To-One ` +
    `Relationship object exists. The Primary Data in the HTTP Response Body ` +
    `is the JSON-API Resource that is part of the requested to-one ` +
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
    type: '<<single>>'
  }
}
