'use strict'

const raml = require('./raml')
const asset = require('../../asset')
const assetNames = require('../../../libs/asset-names')

/**
 * RAML Type Representational objects for a JSON-API Resource Identifier.
 * Ref: http://jsonapi.org/format/#document-resource-identifier-objects
 *
 * @example
 *   {
 *     "id": "",
 *     "type": ""
 *   }
 * @type {Object}
 */
module.exports = Object.assign(Object.create(asset), {
  raml: raml,
  name: assetNames.types.resourceIdentifier
})
