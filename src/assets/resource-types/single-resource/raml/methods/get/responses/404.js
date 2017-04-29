'use strict'

const assetNames = require('../../../../../../../libs/asset-names')

/**
 * Contains info about the HTTP 404 Response that can be retrieved when making
 * an HTTP GET Request to `/{type}/{id}/`.
 * Ref: http://jsonapi.org/format/#fetching-resources-responses-404
 * @type {Object}
 */
module.exports = {
  description: `HTTP Response returned when '{type}' is an invalid JSON-API ` +
    `Resource type.` +
    `\nMore Info: http://jsonapi.org/format/#fetching-resources-responses-404`,
  headers: {
    'Content-Type': {
      description: 'JSON-API Content Type of HTTP Request ' +
        '(application/vnd.api+json)',
      example: 'application/vnd.api+json'
    }
  },
  body: {
    type: assetNames.types.errorDocument
  }
}
