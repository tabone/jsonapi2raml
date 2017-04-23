'use strict'

const raml = require('./raml')
const asset = require('../../asset')
const assetNames = require('../../../libs/asset-names')

/**
 * RAML Trait Representational object for a JSON-API Page Offset Query Param.
 * Ref: http://jsonapi.org/format/#fetching-pagination
 * @type {Object}
 */
module.exports = Object.assign(Object.create(asset), {
  raml: raml,
  name: assetNames.traits.pageOffsetQueryParam
})
