'use strict'

const assetNames = require('../../../../../../libs/asset-names')

/**
 * Contains info about the HTTP GET Request that can be made to the
 * `/{type}/{id}/{relationship-name}/` endpoint when the relationship is a
 * To-Many Relationship.
 * Ref: http://jsonapi.org/format/#fetching-resources
 * @type {Object}
 */
module.exports = {
  description: `Endpoint used to retrieve the JSON-API Resources that are ` +
    `part of a To-Many Relationship of the Primary JSON-API Resource.` +
    `\nMore Info: http://jsonapi.org/format/#fetching-resources`,
  is: [
    assetNames.traits.jsonAPIHeader,
    assetNames.traits.sortQueryParam,
    assetNames.traits.fieldsQueryParam,
    assetNames.traits.includeQueryParam,
    assetNames.traits.pageLimitQueryParam,
    assetNames.traits.pageOffsetQueryParam
  ],
  responses: require('./responses')
}
