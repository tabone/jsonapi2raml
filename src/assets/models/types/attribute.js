'use strict'

const asset = require('../../asset')
const utils = require('../../../libs/utils')
const nameUtils = require('../../../libs/name-utils')

/**
 * Meant to be used as a prototype by RAML Type Representational objects for
 * JSON-API Attributes.
 * @type {Object}
 */
module.exports = Object.assign(Object.create(asset), {
  /**
   * RAML Type representing an instance of a JSON-API Attribute object.
   * @type {Object}
   */
  raml: null,

  /**
   * RAML Type name.
   * @type {String}
   */
  name: null,

  /**
   * JSON-API Resource which is related to the RAML Type being represented.
   * @type {Object}
   */
  resource: null,

  /**
   * Function used to initialize the object making use of this prototype.
   * @param  {Object} info.resource JSON-API Resource which is related to the
   *                                RAML Type being represented.
   * @return {Object} RAML Type Representational object.
   */
  init (info) {
    // Keep a reference of the JSON-API Resource related to the RAML Type the
    // instance is representing.
    this.resource = info.resource

    // Generate and store the name of the RAML Type.
    this.name = nameUtils.types.attribute(this.resource.type)

    // Setup RAML object.
    setupRAML.call(this, info)
    return this
  }
})

/**
 * Function used to setup the RAML Object of the instance using this prototype.
 * @param  {Object} info.resource JSON-API Resource which is related to the
 *                                RAML Type being represented.
 */
function setupRAML ({ resource }) {
  // Get a user-friendly name for the JSON-API Resource type.
  const resourceName = utils.prettify(resource.type)

  // Initialize the RAML Type.
  this.raml = {
    type: 'object',
    displayName: `'${resourceName}' Resource Attributes`,
    description: `Attributes for '${resourceName}' Resource`,
    additionalProperties: false,
    properties: {}
  }

  // For every attribute that the JSON-API Resource being represented has, there
  // should be a property inside the RAML Type.
  Object.keys(resource.attributes).forEach(name => {
    this.raml.properties[name] = resource.attributes[name]
  })
}
