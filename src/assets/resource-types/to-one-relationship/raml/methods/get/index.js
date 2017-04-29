'use strict'

const assetNames = require('../../../../../../libs/asset-names')

/**
 * Contains info about the HTTP GET Request that can be made to the
 * `/{type}/{id}/relationships/{relationship-name}/` endpoint when the
 * relationship is a To-One Relationship.
 * Ref: http://jsonapi.org/format/#fetching-relationships
 * @type {Object}
 */
module.exports = {
  description: `Endpoint used to retrieve a JSON-API To-One Relationship ` +
    `object of a JSON-API Resource.` +
    `\nMore info: http://jsonapi.org/format/#fetching-relationships`,
  is: [ assetNames.traits.jsonAPIHeader ],
  responses: require('./responses')
}
