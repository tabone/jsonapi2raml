'use strict'

/**
 * Contains info about the HTTP Responses that can be retrieved when doing an
 * HTTP POST Request to the `/{type}/` endpoint.
 * @type {Object}
 */
module.exports = {
  201: require('./201'),
  202: require('./202'),
  204: require('./204'),
  403: require('./403'),
  404: require('./404'),
  409: require('./409')
}
