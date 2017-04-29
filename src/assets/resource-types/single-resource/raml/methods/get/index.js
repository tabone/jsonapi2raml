'use strict'

const assetNames = require('../../../../../../libs/asset-names')

/**
 * Contains info about the HTTP GET Request that can be made to the
 * `/{type}/{id}/` endpoint.
 * Ref: http://jsonapi.org/format/#fetching-resources
 * @type {Object}
 */
module.exports = {
  description: `Endpoint used to retrieve a JSON-API Resource by its ID.` +
    `\nMore Info: http://jsonapi.org/format/#fetching-resources`,
  is: [
    assetNames.traits.jsonAPIHeader,
    assetNames.traits.fieldsQueryParam,
    assetNames.traits.includeQueryParam
  ],
  responses: require('./responses')
}
