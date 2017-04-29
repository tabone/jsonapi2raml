'use strict'

/**
 * Contains info about the HTTP methods that can be used in `/{type}/{id}/`
 * endpoint.
 * @type {Object}
 */
module.exports = {
  get: require('./get'),
  patch: require('./patch'),
  delete: require('./delete')
}
