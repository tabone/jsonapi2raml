'use strict'

const assetNames = require('../../../../../../libs/asset-names')

module.exports = {
  description: 'Endpoint used to update a To-One relationship of a ' +
    'resource.\nMore info: ' +
    'http://jsonapi.org/format/#crud-updating-to-one-relationships',
  is: [ assetNames.traits.jsonAPIHeader ],
  body: {
    type: assetNames.types.toOneRelationship
  },
  responses: require('./responses')
}
