'use strict'

const assetNames = require('../../../../../../libs/asset-names')

module.exports = {
  description: 'Endpoint used to retrieve the To-One relationship info of ' +
    'a resource.\n' +
    'More info: http://jsonapi.org/format/#fetching-relationships',
  is: [ assetNames.traits.jsonAPIHeader ],
  responses: require('./responses')
}
