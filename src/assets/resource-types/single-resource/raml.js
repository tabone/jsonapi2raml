'use strict'

const assetNames = require('../../../libs/asset-names')

/**
 * RAML Resource Type representing the HTTP Requests & Responses that can be
 * made to the `/{type}/{id}` endpoint.
 * @type {Object}
 */
module.exports = {
  uriParameters: {
    id: {
      type: 'string',
      description: 'Resource ID'
    }
  },
  get: {
    description: 'Endpoint used to retrieve a resource by its ID.\n' +
      'More Info: http://jsonapi.org/format/#fetching',
    is: [
      assetNames.traits.jsonAPIHeader,
      assetNames.traits.fieldsQueryParam,
      assetNames.traits.includeQueryParam
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
          type: '<<single>>'
        }
      },
      404: {
        description: 'HTTP Response when requested resource does not exist.\n' +
          'More info:' +
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
  },
  patch: {
    description: 'Endpoint used to update an existent resource.\n' +
      'More Info: http://jsonapi.org/format/#crud-updating',
    is: [ assetNames.traits.jsonAPIHeader ],
    body: {
      type: '<<single>>'
    },
    responses: {
      200: {
        description: 'HTTP Response when the resource has been updated.\n' +
          'More info: http://jsonapi.org/format/#crud-updating-responses-200',
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
        description: 'HTTP Response for when the request to update the' +
          'resource has been accepted, but the server has not completed the' +
          'modification by the time it responded.\n' +
          'More info: http://jsonapi.org/format/#crud-updating-responses-202',
        headers: {
          'Content-Type': {
            description: 'JSON-API Content Type of HTTP Request ' +
              '(application/vnd.api+json)',
            example: 'application/vnd.api+json'
          }
        }
      },
      204: {
        description: 'HTTP Response for when the resource has been updated, ' +
          'but unlike HTTP Status 200 the server did not provide the updated ' +
          'resource in the HTTP Response Body.\n' +
          'More info: http://jsonapi.org/format/#crud-updating-responses-204',
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
          'More Info: http://jsonapi.org/format/#crud-updating-responses-403',
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
        description: 'HTTP Response for when a resource to be updated does ' +
          'not exist.\n' +
          'More Info: http://jsonapi.org/format/#crud-updating-responses-404',
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
        description: 'HTTP Response for when the update request will be ' +
          'violating server-enforced constraints.\n' +
          'More Info: http://jsonapi.org/format/#crud-updating-responses-409',
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
  },
  delete: {
    description: 'Endpoint used to delete an existent resource.\n' +
      'More Info: http://jsonapi.org/format/#crud-deleting',
    is: [ assetNames.traits.jsonAPIHeader ],
    responses: {
      200: {
        description: 'HTTP Response when the resource has been deleted.\n' +
          'More info: http://jsonapi.org/format/#crud-deleting-responses-200',
        headers: {
          'Content-Type': {
            description: 'JSON-API Content Type of HTTP Request ' +
              '(application/vnd.api+json)',
            example: 'application/vnd.api+json'
          }
        }
      },
      202: {
        description: 'HTTP Response for when the request to delete the' +
          'resource has been accepted, but the server has not completed the' +
          'deletion by the time it responded.\n' +
          'More info: http://jsonapi.org/format/#crud-deleting-responses-202',
        headers: {
          'Content-Type': {
            description: 'JSON-API Content Type of HTTP Request ' +
              '(application/vnd.api+json)',
            example: 'application/vnd.api+json'
          }
        }
      },
      204: {
        description: 'HTTP Response for when the resource has been deleted, ' +
          'but unlike HTTP Status 200 the server did not provide anything ' +
          'in the HTTP Response Body.\n' +
          'More info: http://jsonapi.org/format/#crud-deleting-responses-204',
        headers: {
          'Content-Type': {
            description: 'JSON-API Content Type of HTTP Request ' +
              '(application/vnd.api+json)',
            example: 'application/vnd.api+json'
          }
        }
      },
      404: {
        description: 'HTTP Response for when a resource to be deleted does ' +
          'not exist.\n' +
          'More Info: http://jsonapi.org/format/#crud-deleting-responses-404',
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
