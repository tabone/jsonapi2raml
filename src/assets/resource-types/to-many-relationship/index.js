'use strict'

const raml = require('./raml')
const asset = require('../../asset')
const assetNames = require('../../../libs/asset-names')

/**
 * RAML Resource Type Representational object for the HTTP Requests & Responses
 * that can be made to `/{type}/{id}/relationships/{relationship-name}/`
 * endpoint when the relationship is a To-Many Relationship.
 * @type {Object}
 */
module.exports = Object.assign(Object.create(asset), {
  raml: raml,
  name: assetNames.resourceTypes.toManyRelationship
})
