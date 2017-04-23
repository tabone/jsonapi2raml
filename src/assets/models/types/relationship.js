'use strict'

const asset = require('../../asset')
const utils = require('../../../libs/utils')
const nameUtils = require('../../../libs/name-utils')
const assetNames = require('../../../libs/asset-names')

/**
 * Meant to be used as a prototype by RAML Type Representational objects for
 * JSON-API Relationship objects.
 * @type {Object}
 */
module.exports = Object.assign(Object.create(asset), {
  /**
   * RAML Type representing an instance of a JSON-API Relationship object.
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
    this.name = nameUtils.types.relationship(this.resource.type)

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
    displayName: `'${resourceName}' Resource Relationships`,
    description: `Relationships for '${resourceName}' Resource`,
    additionalProperties: false,
    properties: {}
  }

  // For every relationship that the JSON-API Resource being represented has,
  // there should be a property inside the RAML Type.
  Object.keys(resource.relationships).forEach(name => {
    // Get relationship object
    const relationship = resource.relationships[name]

    this.raml.properties[name] = {
      required: true,
      type: Array.isArray(relationship.data) === false
        ? assetNames.types.toOneRelationship
        : assetNames.types.toManyRelationship
    }
  })
}
