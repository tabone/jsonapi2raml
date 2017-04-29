'use strict'

const assetNames = require('../../../../../../../libs/asset-names')

module.exports = {
  description: 'HTTP Response for when a related resource does not ' +
    'exist.\n' +
    'More Info: http://jsonapi.org/format/#crud-creating-responses-404',
  headers: {
    'Content-Type': {
      description: 'JSON-API Content Type of HTTP Request ' +
        '(application/vnd.api+json)',
      example: 'application/vnd.api+json'
    }
  },
  body: {
    type: assetNames.types.errorDocument
  }
}
