'use strict'

const assetNames = require('../../../libs/asset-names')

/**
 * RAML Type representing a JSON-API Resource Object.
 * Ref: http://jsonapi.org/format/#document-resource-objects
 * @type {Object}
 */
module.exports = {
  type: assetNames.types.resourceIdentifier,
  displayName: 'Resource Object',
  description: 'Represents an individual resource.',
  additionalProperties: false,
  properties: {
    attributes: {
      type: 'object',
      required: false
    },
    relationships: {
      type: 'object',
      required: false
    },
    meta: {
      type: 'object',
      required: false
    }
  },
  example: {
    id: '1',
    type: 'user',
    attributes: {
      name: 'luca',
      surname: 'tabone'
    },
    relationships: {
      token: {
        data: {
          type: 'token',
          id: '1'
        }
      }
    }
  }
}
