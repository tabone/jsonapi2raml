'use strict'

const tasks = require('./tasks')
const utils = require('./libs/utils')
const generators = require('./generators')
const assetNames = require('./libs/asset-names')

/**
 * Stores RAML Representational objects common to all REST APIs which follow the
 * JSON-API spec.
 * @type {Object}
 */
const assets = {
  types: require('./assets/types'),
  traits: require('./assets/traits'),
  resourceTypes: require('./assets/resource-types')
}

/**
 * Will be storing the RAML Type Representational objects (indexed by their
 * name) related to the provided JSON-API Resources.
 * @type {Array}
 */
const types = {}

/**
 * Will be storing the RAML Endpoints related to the provided JSON-API
 * Resources.
 * @type {Object}
 */
const endpoints = {}

module.exports = {
  /**
   * Contains a list of generators provided with `jsonapi2raml`.
   */
  generators,

  /**
   * Function used to generate the RAML Documenation of a REST API that follow
   * the JSON-API spec.
   * @param  {String}   info.output    The name of the file or directory where
   *                                   the RAML Documentation will be created
   *                                   in.
   * @param  {Array}    info.resources List of JSON-API Resources which will be
   *                                   used to generate the RAML Documentation.
   * @param  {Function} info.generator Once the parsing has been completed this
   *                                   function will be invoked with all the
   *                                   generated RAML Objects and the name of
   *                                   the output file. By Default it will use
   *                                   the 'Single File' generator.
   * @return {Promise} Resolved if RAML Documentation is successfully generated
   *                   Rejected otherwise.
   */
  generate (info) {
    // Verify that the name of the file/directory where RAML Documentation will
    // be written in, has been provided.
    if (typeof info.output !== 'string') {
      console.error('Provide name of the file/directory where RAML ' +
        'Documenation will be created in')
      return
    }

    // Default to 'Single File' generator if no generator is specified.
    const generator = (typeof info.generator === 'function')
      ? info.generator
      : generators.singleFile

    // Parse resources & create the required RAML endpoints & objects.
    return Promise.all(info.resources.map(parseResource)).then(() => {
      // Once all resources have been parsed & the required RAML endpoints &
      // objects have been created, invoke the specified generator.
      return generator({
        output: info.output,
        assets: {
          names: assetNames,
          raml: {
            endpoints,
            traits: assets.traits,
            resourceTypes: assets.resourceTypes,
            types: {
              payload: types,
              generic: assets.types
            }
          }
        }
      })
    }).catch(console.error)
  }
}

/**
 * Function used to parse a single JSON-API Resource to create the RAML
 * Endpoints & Types related to it.
 * @param {Object} resource JSON-API Resource to be parsed.
 * @return {Promise} Resolved if the RAML Endpoints & Objects have been created
 *                   successfully, rejected otherwise.
 */
function parseResource (resource) {
  // Validate resource to be parsed.
  if (utils.isResourceValid(resource) === false) {
    return Promise.reject(new Error(`One of your resources is invalid. Make ` +
      `sure that all resources have an attribute 'type' of type 'string'`))
  }

  return Promise.all([
    // Created RAML Types of the JSON-API Resource being parsed.
    createResourceTypes(resource),
    // Create RAML Endpoints of the JSON-API Resource being parsed.
    tasks.createResourceEndpoints(resource)
  ]).then(([ resourceTypes, resourceEndpoints ]) => {
    Object.assign(types, resourceTypes)
    Object.assign(endpoints, resourceEndpoints)
  })
}

/**
 * Function used to create the RAML Representational objects for a JSON-API
 * Resource.
 * @param {Object} resource JSON-API Resource object.
 * @return {Promise} Resolved if all RAML Representational objects are created
 *                   successfully, rejected otherwise.
 */
function createResourceTypes (resource) {
  /**
   * Will be storing the RAML Type Representational objects related to the
   * JSON-API Resource being parsed.
   * @type {Object}
   */
  const types = {}

  // Start creating the RAML Representational objects.
  return Promise.all([
    // Create Attributes & Relationships RAML Representational Objects.
    tasks.createAttributeType({ resource }),
    tasks.createRelationshipType({ resource })
  ]).then(([ attributeType, relationshipType ]) => {
    if (attributeType !== null) {
      types[attributeType.name] = attributeType
    }

    if (relationshipType !== null) {
      types[relationshipType.name] = relationshipType
    }

    // Create Resource RAML Representational Objects.
    return tasks.createResourceType({
      resource, attributeType, relationshipType
    })
  }).then(resourceType => {
    types[resourceType.name] = resourceType
    // Create Top-Level Document RAML Representational Objects.
    return Promise.all([
      tasks.createSingleResourceDocumentType({ resource, resourceType }),
      tasks.createMultipleResourceDocumentType({ resource, resourceType })
    ])
  }).then(([ singleResourceDocument, multipleResourceDocument ]) => {
    types[singleResourceDocument.name] = singleResourceDocument
    types[multipleResourceDocument.name] = multipleResourceDocument
    return types
  })
}
