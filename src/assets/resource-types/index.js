'use strict'

/**
 * Contains a list of RAML Resource Type Representational objects (indexed by
 * their name) common to all REST APIs following the JSON-API spec.
 * @type {Object}
 */
module.exports = [
  require('./single-resource'),
  require('./multiple-resource'),
  require('./to-one-relationship'),
  require('./to-many-relationship'),
  require('./to-one-resource-relationship'),
  require('./to-many-resource-relationship')
].reduce((resourceTypes, resourceType) => {
  resourceTypes[resourceType.name] = resourceType
  return resourceTypes
}, {})
