'use strict'

const assetNames = require('../../../libs/asset-names')

/**
 * RAML Resource Type representing the HTTP Requests & Responses that can be
 * made to `/{type}/{id}/{relationship-name}/` endpoint when the relationship is
 * a To-Many Relationship.
 * @type {Object}
 */
module.exports = {
  get: {
    description: 'Endpoint used the retrieve resources related to a primary ' +
      'resource.\nMore Info: http://jsonapi.org/format/#fetching',
    is: [
      assetNames.traits.jsonAPIHeader,
      assetNames.traits.sortQueryParam,
      assetNames.traits.fieldsQueryParam,
      assetNames.traits.includeQueryParam,
      assetNames.traits.pageLimitQueryParam,
      assetNames.traits.pageOffsetQueryParam
    ],
    responses: {
      200: {
        description: 'HTTP Response when related resources exists.\n' +
          'More info: ' +
          'http://jsonapi.org/format/#fetching-resources-responses-200',
        headers: {
          'Content-Type': {
            description: 'JSON-API Content Type of HTTP Request ' +
              '(application/vnd.api+json)',
            example: 'application/vnd.api+json'
          }
        },
        body: {
          type: '<<multiple>>'
        }
      },
      404: {
        description: 'HTTP Response when related resources do not exists.\n' +
          'More info: ' +
          'http://jsonapi.org/format/#fetching-resources-responses-404',
        headers: {
          'Content-Type': {
            description: 'JSON-API Content Type of HTTP Request ' +
              '(application/vnd.api+json)',
            example: 'application/vnd.api+json'
          }
        },
        body: {
          type: assetNames.types.errorDocument
        }
      }
    }
  }
}
