'use strict'

const fs = require('fs')
const yaml = require('json2yaml')

/**
 * `jsonapi2raml` Generator used to generate the RAML Documentation in a single
 * file.
 * @param  {String} info.output                    The name of the file in which
 *                                                 this generator will generate
 *                                                 the RAML Documenation in.
 * @param  {Object} info.assets.names              Names of RAML objects common
 *                                                 to all REST APIs that follow
 *                                                 the JSON-API spec.
 * @param  {Object} info.assets.raml.traits        RAML Trait Representational
 *                                                 objects common to all REST
 *                                                 APIs that follow the JSON-API
 *                                                 spec.
 * @param  {Object} info.assets.raml.endpoints     RAML Endpoints common to all
 *                                                 REST APIs that follow the
 *                                                 JSON-API spec.
 * @param  {Object} info.assets.raml.resourceTypes RAML Resource Type
 *                                                 Representational objects
 *                                                 common to all REST APIs that
 *                                                 follow the JSON-API spec.
 * @param  {Object} info.assets.raml.types.generic RAML Type Representational
 *                                                 objects common to all REST
 *                                                 APIs that follow the JSON-API
 *                                                 spec.
 * @param  {Object} info.assets.raml.types.payload RAML Type Representational
 *                                                 objects related to the
 *                                                 provided JSON-API resources.
 * @return {Promise} Resolved if RAML Documenation file is created successfully,
 *                   rejected otherwise.
 */
module.exports = info => {
  const raml = {
    title: 'Example',
    version: '1.0',
    description: 'Example description',
    baseUri: 'http://example.io/',
    mediaType: 'application/vnd.api+json',
    protocols: [ 'HTTP' ],
    types: {},
    traits: info.assets.raml.traits,
    resourceTypes: info.assets.raml.resourceTypes
  }

  Object.assign(raml, info.assets.raml.endpoints)
  Object.assign(raml.types, info.assets.raml.types.generic)
  Object.assign(raml.types, info.assets.raml.types.payload)
  return writeRAML(info.output, raml)
}

/**
 * Function used to create the RAML File.
 * @param  {String} info.output The name of the file in which this generator
 *                              will generate the RAML Documenation in.
 * @param  {Object} raml        Object containing the RAML to be written.
 * @return {Promise} Resolved if RAML Documenation file is created successfully,
 *                   rejected otherwise.
 */
function writeRAML (output, raml) {
  return new Promise((resolve, reject) => {
    const ramlStr = yaml.stringify(JSON.parse(JSON.stringify(raml)))
      .replace(/^---/, '#%RAML 1.0')
    fs.writeFile(`${output}.raml`, ramlStr, err => {
      if (err != null) reject(err)
      resolve()
    })
  })
}
