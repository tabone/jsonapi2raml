'use strict'

const assetNames = require('../../../../../../libs/asset-names')

/**
 * Contains info about the HTTP PATCH Request that can be made to the
 * `/{type}/{id}/` endpoint.
 * Ref: http://jsonapi.org/format/#crud-updating
 * @type {Object}
 */
module.exports = {
  description: 'Endpoint used to update an existent JSON-API Resource.\n' +
    'More Info: http://jsonapi.org/format/#crud-updating',
  is: [ assetNames.traits.jsonAPIHeader ],
  body: {
    type: '<<single>>'
  },
  responses: require('./responses')
}
