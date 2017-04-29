'use strict'

const assetNames = require('../../../../../../../libs/asset-names')

module.exports = {
  description: 'HTTP Response when the relationships has been removed.' +
    '\nMore Info:' +
    'http://jsonapi.org/format/#crud-updating-relationship-responses-200',
  headers: {
    'Content-Type': {
      description: 'JSON-API Content Type of HTTP Request ' +
        '(application/vnd.api+json)',
      example: 'application/vnd.api+json'
    }
  },
  body: {
    type: assetNames.types.toManyRelationship
  }
}
