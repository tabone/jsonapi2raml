'use strict'

/**
 * Utility used to return the name of RAML Types that describe the JSON-API
 * Resources provided to `jsonapi2raml` to create the RAML Documentation.
 * @type {Object}
 */
module.exports = {
  resource: require('./resource'),
  attribute: require('./attribute'),
  relationship: require('./relationship'),
  singleResourceDocument: require('./single-resource-document'),
  multipleResourceDocument: require('./multiple-resource-document')
}
