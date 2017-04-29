'use strict'

/**
 * Contains info about the HTTP Responses that can be retrieved when doing an
 * HTTP GET Request to the `/{type}/{id}/{relationship-name}/` endpoint when the
 * relationship is a to-one relationship.
 * @type {Object}
 */
module.exports = {
  200: require('./200'),
  404: require('./404')
}
