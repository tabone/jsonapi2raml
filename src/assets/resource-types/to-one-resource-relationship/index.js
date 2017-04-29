'use strict'

const asset = require('../../asset')
const assetNames = require('../../../libs/asset-names')

/**
 * RAML Resource Type Representational object for the HTTP Requests & Responses
 * that can be made to `/{type}/{id}/{relationship-name}/` endpoint when the
 * relationship is a To-One Relationship.
 * @type {Object}
 */
module.exports = Object.assign(Object.create(asset), {
  raml: require('./raml'),
  name: assetNames.resourceTypes.toOneResourceRelationship
})
