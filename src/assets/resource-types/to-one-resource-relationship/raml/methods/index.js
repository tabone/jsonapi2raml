'use strict'

/**
 * Contains info about the HTTP methods that can be used in
 * `/{type}/{id}/{relationship-name}/` when the relationship is a To-One
 * Relationship.
 * @type {Object}
 */
module.exports = {
  get: require('./get')
}
