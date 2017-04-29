'use strict'

const assetNames = require('../../../../../../../libs/asset-names')

module.exports = {
  description: 'HTTP Response for when the update request will be ' +
    'violating server-enforced constraints.\n' +
    'More Info: http://jsonapi.org/format/#crud-updating-responses-409',
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
