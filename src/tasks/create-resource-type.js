'use strict'

const { resource } = require('../assets/models/types')

/**
 * Function used to create the RAML Type Representational object for the
 * JSON-API Resource.
 * @param  {Object} info.resource JSON-API Resource which the new RAML
 *                                Representational object will be related to.
 * @return {Object} RAML Type Representational object.
 */
module.exports = info => {
  // A RAML Type Representational object for a JSON-API Resource should only be
  // created if a resource is provided.
  if (info.resource == null) return null

  // Create a new RAML Type Representational object.
  return Object.create(resource).init(info)
}
