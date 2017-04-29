'use strict'

const assetNames = require('../../../../../../libs/asset-names')

/**
 * Contains info about the HTTP GET Request that can be made to the
 * `/{type}/{id}/{relationship-name}/` endpoint when the relationship is a
 * To-One Relationship.
 * Ref: http://jsonapi.org/format/#fetching-resources
 * @type {Object}
 */
module.exports = {
  description: `Endpoint used to retrieve the JSON-API Resource that is ` +
    `part of a To-One Relationship of the Primary JSON-API Resource.` +
    `\nMore Info: http://jsonapi.org/format/#fetching-resources`,
  is: [
    assetNames.traits.jsonAPIHeader,
    assetNames.traits.fieldsQueryParam,
    assetNames.traits.includeQueryParam
  ],
  responses: require('./responses')
}
