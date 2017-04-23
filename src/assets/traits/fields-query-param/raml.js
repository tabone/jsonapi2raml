'use strict'

/**
 * RAML Trait representing the JSON-API Fields Query Param.
 * Ref: http://jsonapi.org/format/#fetching-sparse-fieldsets
 * @type {Object}
 */
module.exports = {
  queryParameters: {
    fields: {
      type: 'string',
      description: 'List of fields to return (comma-separated).\n' +
        'More info: http://jsonapi.org/format/#fetching-sparse-fieldsets',
      required: false,
      example: 'name,comment'
    }
  }
}
