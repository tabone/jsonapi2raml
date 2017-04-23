'use strict'

/**
 * RAML Type representing a JSON-API Resource Identifier.
 * Ref: http://jsonapi.org/format/#document-resource-identifier-objects
 * @type {Object}
 */
module.exports = {
  type: 'object',
  displayName: 'Resource Identifier',
  description: 'Identifies an individual resource.',
  additionalProperties: false,
  properties: {
    id: {
      type: 'string',
      required: true
    },
    type: {
      type: 'string',
      required: true
    }
  },
  example: {
    id: '1',
    type: 'user'
  }
}
