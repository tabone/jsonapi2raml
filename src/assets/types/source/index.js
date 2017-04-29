'use strict'

const raml = require('./raml')
const asset = require('../../asset')
const assetNames = require('../../../libs/asset-names')

/**
 * RAML Type Representational object for a JSON-API Source object.
 * Ref: http://jsonapi.org/format/#error-objects
 *
 * @example
 *   {
 *     "parameter": "include",
 *     "pointer": "/data/attributes/first-name"
 *   }
 * @type {Object}
 */
module.exports = Object.assign(Object.create(asset), {
  raml: raml,
  name: assetNames.types.source
})
