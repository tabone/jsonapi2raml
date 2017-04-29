'use strict'

const assetNames = require('../../../../../../libs/asset-names')

module.exports = {
  description: 'Endpoint used to add To-Many relationships of a ' +
    'resource.\nMore info: ' +
    'http://jsonapi.org/format/#crud-updating-to-many-relationships',
  is: [ assetNames.traits.jsonAPIHeader ],
  body: {
    type: assetNames.types.toManyRelationship
  },
  responses: require('./responses')
}
