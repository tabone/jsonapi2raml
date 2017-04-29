'use strict'

/**
 * RAML Resource Type representing the HTTP Requests & Responses that can be
 * made to the `/{type}/{id}/` endpoint.
 * @type {Object}
 */
module.exports = Object.assign(require('./methods'), {
  uriParameters: {
    id: {
      type: 'string',
      description: 'Resource ID'
    }
  }
})
