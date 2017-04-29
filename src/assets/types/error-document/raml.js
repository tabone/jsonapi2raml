'use strict'

const assetNames = require('../../../libs/asset-names')

/**
 * RAML Type representing a JSON-API Top-Level Document showing a list of
 * errors.
 * Ref: http://jsonapi.org/format/#document-top-level
 * @type {Object}
 */
module.exports = {
  type: 'object',
  displayName: 'JSON-API Error Document',
  description: 'JSON-API Error Document.',
  additionalProperties: false,
  properties: {
    errors: {
      type: `${assetNames.types.error}[]`,
      required: true
    }
  }
}
