'use strict'

const raml = require('./raml')
const asset = require('../../asset')
const assetNames = require('../../../libs/asset-names')

/**
 * RAML Type Representational object for a JSON-API Error object.
 * Ref: http://jsonapi.org/format/#error-objects
 *
 * @example
 *   {
 *     "title": "",
 *     "detail": ""
 *   }
 * @type {Object}
 */
module.exports = Object.assign(Object.create(asset), {
  raml: raml,
  name: assetNames.types.error
})
