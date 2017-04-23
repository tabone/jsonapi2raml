'use strict'

/**
 * RAML Trait representing the JSON-API Include Query Param.
 * Ref: http://jsonapi.org/format/#fetching-includes
 * @type {Object}
 */
module.exports = {
  queryParameters: {
    include: {
      type: 'string',
      description: 'List of related resources to return (comma seperated).\n' +
        'More info: http://jsonapi.org/format/#fetching-includes',
      required: false,
      example: 'comments,token'
    }
  }
}
