'use strict'

const assetNames = require('../../../../../../../libs/asset-names')

/**
 * Contains info about the HTTP 404 Response that can be retrieved when making
 * an HTTP GET Request to `/{type}/{id}/{relationship-name}/` when the
 * relationship is a To-One relationship.
 * Ref: http://jsonapi.org/format/#fetching-resources-responses-404
 * @type {Object}
 */
module.exports = {
  description: `HTTP Response returned when the requested JSON-API To-One ` +
    `Relationship object doesn't exist.\nMore Info: ` +
    'http://jsonapi.org/format/#fetching-resources-responses-404',
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
