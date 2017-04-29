'use strict'

const asset = require('../../asset')
const utils = require('../../../libs/utils')
const nameUtils = require('../../../libs/name-utils')
const assetNames = require('../../../libs/asset-names')

/**
 * Meant to be used as a prototype by RAML Type Representational objects for
 * JSON-API Top-Level Documents that show a single of JSON-API Resource.
 * @type {Object}
 */
module.exports = Object.assign(Object.create(asset), {
  /**
   * RAML Object representing an instance of a JSON-API Top-Level Document
   * showing a single JSON-API Resource.
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
   * @param  {Object} info.resource        JSON-API Resource which is related to
   *                                       the RAML Type being represented.
   * @param  {Object} options.resourceType RAML Type Representational object for
   *                                       the JSON-API Resource related to
   *                                       info.resource.
   * @return {Object} RAML Type Representational object.
   */
  init (info) {
    // Keep a reference of the JSON-API Resource related to the RAML Type the
    // instance is representing.
    this.resource = info.resource

    // Generate and store the name of the RAML Type.
    this.name = nameUtils.types.singleResourceDocument(this.resource.type)

    // Setup RAML object.
    setupRAML.call(this, info)
    return this
  },

  /**
   * Function used to set the RAML Data Type of the JSON-API Top-Level Document
   * `data` property.
   * @param  {Object} options.resourceType RAML Type Representational object for
   *                                       the JSON-API Resource of related to
   *                                       info.resource.
   */
  setData (resourceType) {
    this.raml.properties.data = {
      required: true,
      type: resourceType.name
    }
  }
})

/**
 * Function used to setup the RAML Object of the instance using this prototype.
 * @param  {Object} info.resource        JSON-API Resource which is related to
 *                                       the RAML Type being represented.
 * @param  {Object} options.resourceType RAML Type Representational object for
 *                                       the JSON-API Resource related to
 *                                       info.resource.
 */
function setupRAML ({ resource, resourceType }) {
  // Get a user-friendly name for the JSON-API Resource type.
  const resourceName = utils.prettify(resource.type)

  // Initialize the RAML Type.
  this.raml = {
    type: 'object',
    displayName: `JSON-API '${resourceName} Single Resource Document'`,
    description: `JSON-API Document for when returing a single ` +
      `'${resourceName} resource'`,
    properties: {
      included: {
        type: `${assetNames.types.resourceObject}[]`,
        required: false
      }
    }
  }

  // Set the JSON-API Top-Level Document `data` property.
  this.setData(resourceType)
}
