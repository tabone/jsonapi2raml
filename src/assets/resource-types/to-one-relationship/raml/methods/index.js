'use strict'

/**
 * Contains info about the HTTP methods that can be used in
 * `/{type}/{id}/relationships/{relationship-name}/` when the relationship is a
 * To-One Relationship.
 * @type {Object}
 */
module.exports = {
  get: require('./get'),
  patch: require('./patch')
}