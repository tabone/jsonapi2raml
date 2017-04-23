'use strict'

const { relationship } = require('../assets/models/types')

/**
 * Function used to create the RAML Type Representational object for the
 * JSON-API Relationships.
 * @param  {Object} info.resource JSON-API Resource which the new RAML
 *                                Representational object will be related to.
 * @return {Object} RAML Type Representational object.
 */
module.exports = info => {
  /**
   * Determines whether a resource is provided.
   * @type {Boolean}
   */
  const isResourceProvided = (info.resource != null)

  /**
   * Determines whether the provided resource has relationships.
   * @type {Boolean}
   */
  const doesResourceHasRelationships = (info.resource.relationships != null)

  // A RAML Type Representational object for a JSON-API Relationship should only
  // be created if:
  //   1. A resource is provided.
  //   2. The provided resource has relationships.
  if (!isResourceProvided || !doesResourceHasRelationships) return null

  // Create a new RAML Type Representational object.
  return Object.create(relationship).init(info)
}
