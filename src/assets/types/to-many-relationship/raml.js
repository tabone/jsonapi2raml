'use strict'

const assetNames = require('../../../libs/asset-names')

/**
 * RAML Type representing a JSON-API To-Many Relationship object.
 * Ref: http://jsonapi.org/format/#document-resource-object-relationships
 * @type {Object}
 */
module.exports = {
  type: 'object',
  displayName: 'To-Many Relationship',
  description: 'Represents a To-Many Relationship',
  additionalProperties: false,
  properties: {
    data: `${assetNames.types.resourceIdentifier}[]`
  },
  example: {
    data: [{
      type: 'comment',
      id: '1'
    }]
  }
}
