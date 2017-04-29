'use strict'

const assetNames = require('../../../../../../../libs/asset-names')

/**
 * Contains info about the HTTP 200 Response that can be retrieved when making
 * an HTTP GET Request to `/{type}/{id}/relationships/{relationship-name}/`
 * when the relationship is a To-Many relationship.
 * Ref: http://jsonapi.org/format/#fetching-relationships-responses-200
 * @type {Object}
 */
module.exports = {
  description: `HTTP Response returned when the requested JSON-API To-Many ` +
    `Relationship object exist. The Primary Data in the HTTP Response Body ` +
    `is the requested JSON-API To-Many Relationship object.` +
    `\nMore info: ` +
    'http://jsonapi.org/format/#fetching-relationships-responses-200',
  headers: {
    'Content-Type': {
      description: 'JSON-API Content Type of HTTP Request ' +
        '(application/vnd.api+json)',
      example: 'application/vnd.api+json'
    }
  },
  body: {
    type: assetNames.types.toManyRelationship
  }
}
