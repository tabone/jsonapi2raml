'use strict'

const assetNames = require('../../../../../../libs/asset-names')

/**
 * Contains info about the HTTP DELETE Request that can be made to the
 * `/{type}/{id}/` endpoint.
 * Ref: http://jsonapi.org/format/#crud-deleting
 * @type {Object}
 */
module.exports = {
  description: 'Endpoint used to delete an existent JSON-API Resource.\n' +
    'More Info: http://jsonapi.org/format/#crud-deleting',
  is: [ assetNames.traits.jsonAPIHeader ],
  responses: require('./responses')
}
