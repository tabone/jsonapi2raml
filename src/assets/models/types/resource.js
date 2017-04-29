'use strict'

const asset = require('../../asset')
const utils = require('../../../libs/utils')
const nameUtils = require('../../../libs/name-utils')
const assetNames = require('../../../libs/asset-names')

/**
 * Meant to be used as a prototype by RAML Type Representational objects for
 * JSON-API Resource objects.
 */
module.exports = Object.assign(Object.create(asset), {
  /**
   * RAML Type representing an instance of a JSON-API Resource.
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
   * @param  {Object} info.resource            JSON-API Resource which is
   *                                           related to the RAML Type being
   *                                           represented.
   * @param  {Object} options.attributeType    RAML Type Representational object
   *                                           for the JSON-API Attributes
   *                                           object related to info.resource.
   * @param  {Object} options.relationshipType RAML Type Representational object
   *                                           for the JSON-API Relationships
   *                                           object related to info.resource.
   * @return {Object} RAML Type Representational object.
   */
  init (info) {
    // Keep a reference of the JSON-API Resource related to the RAML Type the
    // instance is representing.
    this.resource = info.resource

    // Generate and store the name of the RAML Type.
    this.name = nameUtils.types.resource(this.resource.type)

    // Setup RAML object.
    setupRAML.call(this, info)
    return this
  },

  /**
   * Function used to set the RAML Data Type of the JSON-API Resource
   * `attributes` property.
   * @param  {Object} options.attributeType RAML Type Representational object
   *                                        for the JSON-API Attributes object
   *                                        related to info.resource.
   */
  setAttributes (attributeType) {
    this.raml.properties.attributes = {
      required: true,
      type: attributeType.name
    }
  },

  /**
   * Function used to set the RAML Data Type of the JSON-API Resource
   * `relationships` property.
   * @param  {Object} options.relationshipType RAML Type Representational object
   *                                           for the JSON-API Relationships
   *                                           object related to info.resource.
   */
  setRelationships (relationshipType) {
    this.raml.properties.relationships = {
      required: true,
      type: relationshipType.name
    }
  }
})

/**
 * Function used to setup the RAML Object of the instance using this prototype.
 * @param  {Object} info.resource            JSON-API Resource which is related
 *                                           to the RAML Type being represented.
 * @param  {Object} options.attributeType    RAML Type Representational object
 *                                           for the JSON-API Attributes object
 *                                           related to info.resource.
 * @param  {Object} options.relationshipType RAML Type Representational object
 *                                           for the JSON-API Relationships
 *                                           object related to info.resource.
 */
function setupRAML ({ resource, attributeType, relationshipType }) {
  // Get a user-friendly name for the JSON-API Resource type.
  const resourceName = utils.prettify(resource.type)

  // Initialize the RAML Type.
  this.raml = {
    type: assetNames.types.resourceObject,
    displayName: `'${resourceName}' Resource`,
    description: `'${resourceName}' Resource Object`,
    properties: {}
  }

  // If JSON-API Resource has attributes, set the JSON-API Resource `attributes`
  // property.
  if (resource.attributes != null) this.setAttributes(attributeType)

  // If JSON-API Resource has relationships, set the JSON-API Resource
  // `relationships` property.
  if (resource.relationships != null) this.setRelationships(relationshipType)
}
