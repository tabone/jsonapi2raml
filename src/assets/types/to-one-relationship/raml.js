'use strict'

const assetNames = require('../../../libs/asset-names')

/**
 * RAML Type representing a JSON-API To-One Relationship object.
 * Ref: http://jsonapi.org/format/#document-resource-object-relationships
 * @type {Object}
 */
module.exports = {
  type: 'object',
  displayName: 'To-One Relationship',
  description: 'Represents a To-One Relationship',
  additionalProperties: false,
  properties: {
    data: assetNames.types.resourceIdentifier
  },
  example: {
    data: {
      type: 'user',
      id: '1'
    }
  }
}
