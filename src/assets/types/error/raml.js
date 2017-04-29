'use strict'

const assetNames = require('../../../libs/asset-names')

/**
 * RAML Type representing a JSON-API Error object.
 * Ref: http://jsonapi.org/format/#error-objects
 * @type {Object}
 */
module.exports = {
  type: 'object',
  displayName: 'Error object',
  description: 'JSON-API Error object.',
  additionalProperties: false,
  properties: {
    id: {
      type: 'string',
      required: false
    },
    status: {
      type: 'string',
      required: false
    },
    code: {
      type: 'string',
      required: false
    },
    title: {
      type: 'string',
      required: false
    },
    detail: {
      type: 'string',
      required: false
    },
    source: {
      type: assetNames.types.source,
      required: false
    },
    meta: {
      type: 'object',
      required: false
    }
  }
}
