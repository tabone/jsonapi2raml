'use strict'

/**
 * Contains a list of objects that should be used as a prototype for RAML Type
 * Representational objects.
 * @type {Object}
 */
module.exports = {
  resource: require('./resource'),
  attribute: require('./attribute'),
  relationship: require('./relationship'),
  singleResourceDocument: require('./single-resource-document'),
  multipleResourceDocument: require('./multiple-resource-document')
}
