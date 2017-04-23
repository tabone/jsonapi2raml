'use strict'

/**
 * RAML Trait representing the JSON-API Sort Query Param.
 * Ref: http://jsonapi.org/format/#fetching-sorting
 * @type {Object}
 */
module.exports = {
  queryParameters: {
    sort: {
      type: 'string',
      description: 'List of fields to order the returned resources.' +
        '(comma seperated).\nMore Info: ' +
        'http://jsonapi.org/format/#fetching-sorting',
      required: false,
      example: 'name,-age'
    }
  }
}
