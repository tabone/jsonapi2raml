'use strict'

const assetNames = require('../../../../../../libs/asset-names')

module.exports = {
  description: 'Endpoint used to update an existent resource.\n' +
    'More Info: http://jsonapi.org/format/#crud-updating',
  is: [ assetNames.traits.jsonAPIHeader ],
  body: {
    type: '<<single>>'
  },
  responses: require('./responses')
}
