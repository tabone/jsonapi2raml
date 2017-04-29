'use strict'

const assetNames = require('../../../../../../libs/asset-names')

/**
 * Contains info about the HTTP PATCH Request that can be made to the
 * `/{type}/{id}/relationships/{relationship-name}/` endpoint when the
 * relationship is a To-One Relationship.
 * Ref: http://jsonapi.org/format/#crud-updating-to-one-relationships
 * @type {Object}
 */
module.exports = {
  description: `Endpoint used to update a To-One Relationship object of a ` +
    `Primary JSON-API Resource.\nMore info: ` +
    `http://jsonapi.org/format/#crud-updating-to-one-relationships`,
  is: [ assetNames.traits.jsonAPIHeader ],
  body: {
    type: assetNames.types.toOneRelationship
  },
  responses: require('./responses')
}
