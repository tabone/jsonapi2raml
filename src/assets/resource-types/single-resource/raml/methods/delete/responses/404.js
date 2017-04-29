'use strict'

const assetNames = require('../../../../../../../libs/asset-names')

/**
 * Contains info about the HTTP 404 Response that can be retrieved when making
 * an HTTP DELETE Request to `/{type}/{id}/`.
 * Ref: http://jsonapi.org/format/#crud-deleting-responses-404
 * @type {Object}
 */
module.exports = {
  description: `HTTP Response returned when the JSON-API Resource requested ` +
    `to be deleted doesn't exists.` +
    `\nMore Info: http://jsonapi.org/format/#crud-deleting-responses-404`,
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
