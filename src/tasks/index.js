'use strict'

/**
 * Contains a list of tasks that are used to generate the RAML Documentation.
 * @type {Object}
 */
module.exports = {
  createResourceType: require('./create-resource-type'),
  createAttributeType: require('./create-attribute-type'),
  createRelationshipType: require('./create-relationship-type'),
  createResourceEndpoints: require('./create-resource-endpoints'),
  createSingleResourceDocumentType:
    require('./create-single-resource-document-type'),
  createMultipleResourceDocumentType:
    require('./create-multiple-resource-document-type')
}
