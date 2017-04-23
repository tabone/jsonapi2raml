'use strict'

const { singleResourceDocument } = require('../assets/models/types')

/**
 * Function used to create the RAML Type Representational object for the
 * JSON-API Top-Level Document showing a single of JSON-API Resources.
 * @param  {Object} info.resource     JSON-API Resource which the new RAML
 *                                    Representational object will be related
 *                                    to.
 * @param  {Object} info.resourceType RAML Type Representational object for the
 *                                    JSON-API Resource related to
 *                                    info.resource.
 * @return {Object} RAML Type Representational object.
 */
module.exports = info => {
  /**
   * Determines whether a resource is provided.
   * @type {Boolean}
   */
  const isResourceProvided = (info.resource != null)

  /**
   * Determines whether a RAML Type Representational object for the JSON-API
   * Resource related to info.resource is provided.
   * @type {Boolean}
   */
  const isResourceTypeProvided = (info.resourceType != null)

  // A RAML Type Representational object for a JSON-API Top-Level Document
  // should only be created if:
  //   1. A resource is provided.
  //   2. A RAML Type Representational object for JSON-API Resource is provided.
  if (!isResourceProvided || !isResourceTypeProvided) return null

  // Create a new RAML Type Representational object.
  return Object.create(singleResourceDocument).init(info)
}
