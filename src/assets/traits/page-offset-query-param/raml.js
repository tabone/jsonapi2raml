'use strict'

/**
 * RAML Trait representing the JSON-API Page Offset Query Param.
 * Ref: http://jsonapi.org/format/#fetching-pagination
 * @type {Object}
 */
module.exports = {
  queryParameters: {
    'page[offset]': {
      type: 'number',
      description: 'Number of resources to return.\n' +
        'More info: http://jsonapi.org/format/#fetching-includes',
      required: false,
      example: 2
    }
  }
}
