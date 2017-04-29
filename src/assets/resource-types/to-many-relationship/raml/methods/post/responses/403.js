'use strict'

const assetNames = require('../../../../../../../libs/asset-names')

/**
 * Contains info about the HTTP 403 Response that can be retrieved when making
 * an HTTP POST Request to `/{type}/{id}/relationships/{relationship-name}/`
 * when the relationship is a To-Many relationship.
 * Ref: http://jsonapi.org/format/#crud-updating-relationship-responses-403
 * @type {Object}
 */
module.exports = {
  description: 'HTTP Response returned when the request is not allowed.' +
    `\nMore Info:` +
    `http://jsonapi.org/format/#crud-updating-relationship-responses-403`,
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
