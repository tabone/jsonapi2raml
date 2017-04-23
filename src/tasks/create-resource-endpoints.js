'use strict'

const nameUtils = require('../libs/name-utils')
const assetNames = require('../libs/asset-names')

/**
 * Function used to create the RAML Endpoints of a JSON-API Resource.
 * @param  {Object} resource JSON-API Resource.
 * @return {Object} RAML Endpoints.
 */
module.exports = resource => {
  /**
   * Object to store the endpoints of the provided resource.
   * @type {Object}
   */
  const endpoints = {}

  // If no resource has been given, do nothing.
  if (resource == null) return endpoints

  // Create the RAML Endpoints that each JSON-API Resource should have.
  const endpoint = endpoints[`/${resource.type}`] = {
    '/': {
      type: {
        [ assetNames.resourceTypes.multipleResource ]: {
          single: nameUtils.types.singleResourceDocument(resource.type),
          multiple: nameUtils.types.multipleResourceDocument(resource.type)
        }
      }
    },
    '/{id}': {
      type: {
        [ assetNames.resourceTypes.singleResource ]: {
          single: nameUtils.types.singleResourceDocument(resource.type)
        }
      }
    }
  }

  // If the provided JSON-API Resource does not have relationships, stop
  // process.
  if (resource.relationships == null) return endpoints

  // Else include relationship endpoints.
  endpoint['/{id}']['/relationships'] = {}

  // For each relationship, there should be the following endpoints:
  //   - Endpoint for accessing the JSON-API Relationship object
  //     /{type}/{id}/relationships/{relationship-name}
  //   - Endpoint for accessing the Related JSON-API Resource object:
  //     /{type}/{id}/{relationship-name}
  Object.keys(resource.relationships).forEach(name => {
    const relationship = resource.relationships[name]
    Object.assign(endpoint['/{id}']['/relationships'],
      createRelationshipEndpoint(name, relationship))
    Object.assign(endpoint['/{id}'],
      createResourceRelationshipEndpoint(name, relationship))
  })

  return endpoints
}

/**
 * Function used to add a Relationship RAML Endpoint.
 * @param  {String} name         The name of the relationship.
 * @param  {Object} relationship The JSON-API Relationship object.
 * @return {Object} RAML Endpoint.
 */
function createRelationshipEndpoint (name, relationship) {
  /**
   * Determines whether the relationship is a To-One or To-Many.
   * @type {Boolean}
   */
  const isToOne = Array.isArray(relationship.data) === false

  /**
   * Name of RAML Resource Type.
   * @type {String}
   */
  const resourceType = isToOne
    ? assetNames.resourceTypes.toOneRelationship
    : assetNames.resourceTypes.toManyRelationship

  return {
    [ `/${name}` ]: {
      type: resourceType
    }
  }
}

/**
 * Function used to add a Resource Relationship RAML Endpoint.
 * @param  {String} name         The name of the relationship.
 * @param  {Object} relationship The JSON-API Relationship object.
 * @return {Object} RAML Endpoint.
 */
function createResourceRelationshipEndpoint (name, relationship) {
  /**
   * Determines whether the relationship is a To-One or To-Many.
   * @type {Boolean}
   */
  const isToOne = Array.isArray(relationship.data) === false

  /**
   * RAML Variable Name to be used inside the RAML Endpoint.
   * @type {String}
   */
  const variableName = isToOne ? 'single' : 'multiple'

  /**
   * Name of RAML Resource Type.
   * @type {String}
   */
  const resourceType = isToOne
    ? assetNames.resourceTypes.toOneResourceRelationship
    : assetNames.resourceTypes.toManyResourceRelationship

    /**
     * Name of RAML Type.
     * @type {String}
     */
  const documentType = isToOne
    ? nameUtils.types.singleResourceDocument(relationship.data.type)
    : nameUtils.types.multipleResourceDocument(relationship.data[0].type)

  return {
    [ `/${name}` ]: {
      type: {
        [ resourceType ]: {
          [ variableName ]: documentType
        }
      }
    }
  }
}
