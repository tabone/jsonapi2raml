'use strict'

const assetNames = require('../../../../../../libs/asset-names')

/**
 * Contains info about the HTTP POST Request that can be made to `/{type}/`
 * endpoint.
 * Ref: http://jsonapi.org/format/#crud-creating
 * @type {Object}
 */
module.exports = {
  description: 'Endpoint used to create a new JSON-API Resource.\n' +
    'More Info: http://jsonapi.org/format/#crud-creating',
  is: [ assetNames.traits.jsonAPIHeader ],
  body: {
    type: '<<single>>'
  },
  responses: require('./responses')
}
