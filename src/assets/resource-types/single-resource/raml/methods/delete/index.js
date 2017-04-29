'use strict'

const assetNames = require('../../../../../../libs/asset-names')

module.exports = {
  description: 'Endpoint used to delete an existent resource.\n' +
    'More Info: http://jsonapi.org/format/#crud-deleting',
  is: [ assetNames.traits.jsonAPIHeader ],
  responses: require('./responses')
}
