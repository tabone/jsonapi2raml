'use strict'

/**
 * Meant to be used as a prototype by all RAML Representational objects.
 * @type {Object}
 */
module.exports = {
  toJSON () {
    return this.raml
  }
}
