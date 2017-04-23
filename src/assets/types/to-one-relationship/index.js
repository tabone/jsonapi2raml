'use strict'

const raml = require('./raml')
const asset = require('../../asset')
const assetNames = require('../../../libs/asset-names')

/**
 * RAML Type Representational object for a JSON-API To-One Relationship object.
 * Ref: http://jsonapi.org/format/#document-resource-object-relationships
 *
 * @example
 *   {
 *     data: {...}
 *   }
 * @type {Object}
 */
module.exports = Object.assign(Object.create(asset), {
  raml: raml,
  name: assetNames.types.toOneRelationship
})
