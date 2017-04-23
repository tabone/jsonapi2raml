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
  displayName: 'Error object',
  description: 'JSON-API Error object.',
  additionalProperties: false,
  properties: {
    errors: {
      type: `${assetNames.types.error}[]`,
      required: true
    }
  }
}
