'use strict'

const raml = require('./raml')
const asset = require('../../asset')
const assetNames = require('../../../libs/asset-names')

/**
 * RAML Type Representational object for a JSON-API Top-Level Document showing
 * a list errors.
 * Ref: http://jsonapi.org/format/#document-top-level
 *
 * @example
 *   {
 *     "errors": [{...}]
 *   }
 * @type {Object}
 */
module.exports = Object.assign(Object.create(asset), {
  raml: raml,
  name: assetNames.types.errorDocument
})
