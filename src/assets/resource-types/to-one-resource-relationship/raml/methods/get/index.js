'use strict'

const assetNames = require('../../../../../../libs/asset-names')

module.exports = {
  description: 'Endpoint used the retrieve a resource related to a primary ' +
    'resource.\nMore Info: http://jsonapi.org/format/#fetching',
  is: [
    assetNames.traits.jsonAPIHeader,
    assetNames.traits.fieldsQueryParam,
    assetNames.traits.includeQueryParam
  ],
  responses: require('./responses')
}
