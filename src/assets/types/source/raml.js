'use strict'

/**
 * RAML Type representing a JSON-API Source object.
 * Ref: http://jsonapi.org/format/#error-objects
 * @type {Object}
 */
module.exports = {
  type: 'object',
  displayName: 'Source object',
  description: 'JSON-API Source object.',
  additionalProperties: false,
  properties: {
    pointer: {
      type: 'string',
      required: false
    },
    parameter: {
      type: 'string',
      required: false
    }
  }
}
