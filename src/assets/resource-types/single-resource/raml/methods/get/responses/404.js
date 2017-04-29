'use strict'

const assetNames = require('../../../../../../../libs/asset-names')

module.exports = {
  description: 'HTTP Response when requested resource does not exist.\n' +
    'More info:' +
    'http://jsonapi.org/format/#fetching-resources-responses-404',
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
