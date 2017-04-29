'use strict'

const assetNames = require('../../../../../../../libs/asset-names')

/**
 * Contains info about the HTTP 200 Response that can be retrieved when making
 * an HTTP PATCH Request to `/{type}/{id}/relationships/{relationship-name}/`
 * when the relationship is a To-One relationship.
 * Ref: http://jsonapi.org/format/#crud-updating-relationship-responses-200
 * @type {Object}
 */
module.exports = {
  description: `HTTP Response returned when the JSON-API To-One Relationship ` +
    `object has been updated. The Primary Data in the HTTP Response Body ` +
    `is the updated To-One Relationship object.` +
    `\nMore Info:` +
    `http://jsonapi.org/format/#crud-updating-relationship-responses-200`,
  headers: {
    'Content-Type': {
      description: 'JSON-API Content Type of HTTP Request ' +
        '(application/vnd.api+json)',
      example: 'application/vnd.api+json'
    }
  },
  body: {
    type: assetNames.types.toOneRelationship
  }
}
