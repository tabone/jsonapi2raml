'use strict'

const caseUtil = require('case')

/**
 * Contains utilities used by `jsonapi2raml`.
 * @type {Object}
 */
module.exports = {
  /**
   * Function used to return a user-friendly string.
   * @param  {String} str String to be formatted.
   * @return {String} A user-friendly string.
   */
  prettify (str) {
    return caseUtil.capital(str)
  },

  /**
   * Function used to check whether a resource object is valid. A resource
   * object is considered valid if it has a 'type' attribute of type 'string'.
   * @param  {Object}  resource JSON-API Resource object to be validated.
   * @return {Boolean} TRUE if valid, FALSE otherwise.
   */
  isResourceValid (resource) {
    return resource != null && typeof resource.type === 'string'
  }
}
