'use strict'

const assetNames = require('../../../../../../libs/asset-names')

/**
 * Contains info about the HTTP GET Request that can be made to `/{type}/`
 * endpoint.
 * Ref: http://jsonapi.org/format/#fetching-resources
 * @type {Object}
 */
module.exports = {
  description: `Endpoint used to retrieve a list of JSON-API Resources.` +
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
