'use strict'

const { attribute } = require('../assets/models/types')

/**
 * Function used to create the RAML Type Representational object for the
 * JSON-API Attributes.
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
   * Determines whether the provided resource has attributes.
   * @type {Boolean}
   */
  const doesResourceHasAttributes = (info.resource.attributes != null)

  // A RAML Type Representational object for a JSON-API Attributes should only
  // be created if:
  //   1. A resource is provided.
  //   2. The provided resource has attribtues.
  if (!isResourceProvided || !doesResourceHasAttributes) return null

  // Create a new RAML Type Representational object.
  return Object.create(attribute).init(info)
}
