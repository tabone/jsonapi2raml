'use strict'

/**
 * Contains a list of RAML Type Representational objects (indexed by their name)
 * which are common to a REST APIs following the JSON-API spec.
 * @type {Object}
 */
module.exports = [
  require('./error'),
  require('./source'),
  require('./error-document'),
  require('./resource-object'),
  require('./resource-identifier'),
  require('./to-one-relationship'),
  require('./to-many-relationship')
].reduce((types, type) => {
  types[type.name] = type
  return types
}, {})
