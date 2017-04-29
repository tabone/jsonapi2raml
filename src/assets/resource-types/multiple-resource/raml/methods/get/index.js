'use strict'

const assetNames = require('../../../../../../libs/asset-names')

module.exports = {
  description: 'Endpoint used to retrieve a list of resources.\n' +
    'More Info: http://jsonapi.org/format/#fetching',
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
