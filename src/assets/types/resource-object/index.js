'use strict'

const raml = require('./raml')
const asset = require('../../asset')
const assetNames = require('../../../libs/asset-names')

/**
 * RAML Type Representational objects for a JSON-API Resource Object.
 * Ref: http://jsonapi.org/format/#document-resource-objects
 *
 * @example
 *   {
 *       "id" :"1",
 *       "type": "user",
 *       "attributes": {...},
 *       "relationships: {...}
 *   }
 * @type {Object}
 */
module.exports = Object.assign(Object.create(asset), {
  raml: raml,
  name: assetNames.types.resourceObject
})
