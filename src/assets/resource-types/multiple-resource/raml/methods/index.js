'use strict'

/**
 * Contains info about the HTTP methods that can be used in `/{type}/` endpoint.
 * @type {Object}
 */
module.exports = {
  get: require('./get'),
  post: require('./post')
}
