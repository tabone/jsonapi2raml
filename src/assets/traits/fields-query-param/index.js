'use strict'

const raml = require('./raml')
const asset = require('../../asset')
const assetNames = require('../../../libs/asset-names')

/**
 * RAML Trait Representational object for a JSON-API Fields Query Param.
 * Ref: http://jsonapi.org/format/#fetching-sparse-fieldsets
 * @type {Object}
 */
module.exports = Object.assign(Object.create(asset), {
  raml: raml,
  name: assetNames.traits.fieldsQueryParam
})
