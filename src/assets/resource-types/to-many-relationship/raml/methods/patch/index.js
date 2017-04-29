'use strict'

const assetNames = require('../../../../../../libs/asset-names')

/**
 * Contains info about the HTTP PATCH Request that can be made to
 * `/{type}/{id}/relationships/{relationship-name}/` endpoint when the
 * relationship is a To-Many Relationship.
 * Ref: http://jsonapi.org/format/#crud-updating-to-many-relationships
 * @type {Object}
 */
module.exports = {
  description: `Endpoint used to update a JSON-API To-Many relationship of a ` +
    `Primary JSON-API Resource. \nMore info: ` +
    `http://jsonapi.org/format/#crud-updating-to-many-relationships`,
  is: [ assetNames.traits.jsonAPIHeader ],
  body: {
    type: assetNames.types.toManyRelationship
  },
  responses: require('./responses')
}
