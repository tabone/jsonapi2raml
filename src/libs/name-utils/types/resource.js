'use strict'

const utils = require('../../utils')

/**
 * Function used to return the name of a RAML Type representing a JSON-API
 * Resource object of a certain JSON-API Resource type.
 *
 * @example
 *   fn('user') // returns 'UserResource'
 *
 * @param  {String} type The JSON-API Resource type which the RAML Type will be
 *                       related to.
 * @return {String}      The RAML Type name.
 */
module.exports = type => `${utils.prettify(type)}Resource`
