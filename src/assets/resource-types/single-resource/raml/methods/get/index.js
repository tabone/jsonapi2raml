'use strict'

const assetNames = require('../../../../../../libs/asset-names')

module.exports = {
  description: 'Endpoint used to retrieve a resource by its ID.\n' +
    'More Info: http://jsonapi.org/format/#fetching',
  is: [
    assetNames.traits.jsonAPIHeader,
    assetNames.traits.fieldsQueryParam,
    assetNames.traits.includeQueryParam
  ],
  responses: require('./responses')
}
