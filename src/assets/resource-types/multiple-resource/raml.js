'use strict'

const assetNames = require('../../../libs/asset-names')

/**
 * RAML Resource Type representing the HTTP Requests & Responses that can be
 * made to the `/{type}` endpoint.
 * @type {Object}
 */
module.exports = {
  get: {
    description: 'Endpoint used to retrieve a list of resources.\n' +
      'More Info: http://jsonapi.org/format/#fetching',
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
        description: 'HTTP Response when resource type exists.\nMore info:' +
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
      }
    }
  },
  post: {
    description: 'Endpoint used to create a resource.\n' +
      'More Info: http://jsonapi.org/format/#crud-creating',
    is: [ assetNames.traits.jsonAPIHeader ],
    body: {
      type: '<<single>>'
    },
    responses: {
      201: {
        description: 'HTTP Response for when the resource has been created.\n' +
          'More Info: http://jsonapi.org/format/#crud-creating-responses-201',
        headers: {
          'Content-Type': {
            description: 'JSON-API Content Type of HTTP Request ' +
              '(application/vnd.api+json)',
            example: 'application/vnd.api+json'
          }
        },
        body: {
          type: '<<single>>'
        }
      },
      202: {
        description: 'HTTP Response for when the request to create the' +
          'resource has been accepted, but the server has not completed the' +
          'creation by the time it responded.\n' +
          'More Info: http://jsonapi.org/format/#crud-creating-responses-202',
        headers: {
          'Content-Type': {
            description: 'JSON-API Content Type of HTTP Request ' +
              '(application/vnd.api+json)',
            example: 'application/vnd.api+json'
          }
        }
      },
      204: {
        description: 'HTTP Response for when the resource has been created, ' +
          'but unlike HTTP Status 201 the server did not provide the created ' +
          'resource in the HTTP Response Body.\n' +
          'More Info: http://jsonapi.org/format/#crud-creating-responses-204',
        headers: {
          'Content-Type': {
            description: 'JSON-API Content Type of HTTP Request ' +
              '(application/vnd.api+json)',
            example: 'application/vnd.api+json'
          }
        }
      },
      403: {
        description: 'HTTP Response for when the request is not allowed.\n' +
          'More Info: http://jsonapi.org/format/#crud-creating-responses-403',
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
      },
      404: {
        description: 'HTTP Response for when a related resource does not ' +
          'exist.\n' +
          'More Info: http://jsonapi.org/format/#crud-creating-responses-404',
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
      },
      409: {
        description: 'HTTP Response for when the resource provided to be ' +
          'persisted has an ID which already exists.\n' +
          'More Info: http://jsonapi.org/format/#crud-creating-responses-409',
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
