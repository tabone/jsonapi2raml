'use strict'

const assetNames = require('../../../../../../libs/asset-names')

module.exports = {
  description: 'Endpoint used to create a resource.\n' +
    'More Info: http://jsonapi.org/format/#crud-creating',
  is: [ assetNames.traits.jsonAPIHeader ],
  body: {
    type: '<<single>>'
  },
  responses: require('./responses')
}
