'use strict'

const utils = require('../../utils')

/**
 * Function used to return the name of a RAML Type representing a JSON-API Top-
 * Level Document showing a single JSON-API Resource of a certain type.
 *
 * @example
 *   fn('user') // returns 'UserSingleResourceDocument'
 *
 * @param  {String} type The JSON-API Resource type which the RAML Type will be
 *                       related to.
 * @return {String}      The RAML Type name.
 */
module.exports = type => `${utils.prettify(type)}SingleResourceDocument`
