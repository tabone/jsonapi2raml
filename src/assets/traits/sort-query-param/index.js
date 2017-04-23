'use strict'

const raml = require('./raml')
const asset = require('../../asset')
const assetNames = require('../../../libs/asset-names')

/**
 * RAML Trait Representational object for a JSON-API Sort Query Param.
 * Ref: http://jsonapi.org/format/#fetching-sorting
 * @type {Object}
 */
module.exports = Object.assign(Object.create(asset), {
  raml: raml,
  name: assetNames.traits.sortQueryParam
})
