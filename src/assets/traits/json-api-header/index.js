'use strict'

const raml = require('./raml')
const asset = require('../../asset')
const assetNames = require('../../../libs/asset-names')

/**
 * RAML Trait Representational object for the JSON-API Header required by all HTTP
 * Requests & Responses.
 * Ref: http://jsonapi.org/format/#content-negotiation
 * @type {Object}
 */
module.exports = Object.assign(Object.create(asset), {
  raml: raml,
  name: assetNames.traits.jsonAPIHeader
})
