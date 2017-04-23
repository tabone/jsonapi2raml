'use strict'

/**
 * Contains a list of RAML Trait Representational objects (indexed by their
 * name) common to all REST APIs following the JSON-API spec.
 * @type {Object}
 */
module.exports = [
  require('./json-api-header'),
  require('./sort-query-param'),
  require('./fields-query-param'),
  require('./include-query-param'),
  require('./page-limit-query-param'),
  require('./page-offset-query-param')
].reduce((traits, trait) => {
  traits[trait.name] = trait
  return traits
}, {})
