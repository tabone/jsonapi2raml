'use strict'

/**
 * Contains info about the HTTP Responses that can be retrieved when doing an
 * HTTP DELETE Request to the `/{type}/{id}/` endpoint.
 * @type {Object}
 */
module.exports = {
  200: require('./200'),
  202: require('./202'),
  204: require('./204'),
  404: require('./404')
}
