'use strict'

/**
 * Contains info about the HTTP Responses that can be retrieved when doing an
 * HTTP PATCH Request to the `/{type}/{id}/relationships/{relationship-name}/`
 * endpoint when the relationship is a to-one relationship.
 * @type {Object}
 */
module.exports = {
  200: require('./200'),
  202: require('./202'),
  204: require('./204'),
  403: require('./403')
}