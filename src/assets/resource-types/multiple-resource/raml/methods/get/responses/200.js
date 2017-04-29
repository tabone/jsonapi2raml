'use strict'

/**
 * Contains info about the HTTP 200 Response that can be retrieved when making
 * an HTTP GET Request to `/{type}/`.
 * Ref: http://jsonapi.org/format/#fetching-resources-responses-200
 * @type {Object}
 */
module.exports = {
  description: `The Primary Data in the HTTP Response Body is an Array of ` +
    `JSON-API Resources having the same {type}.` +
    `\nMore info: http://jsonapi.org/format/#fetching-resources-responses-200`,
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
