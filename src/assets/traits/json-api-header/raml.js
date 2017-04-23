'use strict'

/**
 * RAML Trait representing the JSON-API Header required by all HTTP Requests &
 * Responses.
 * Ref: http://jsonapi.org/format/#content-negotiation
 * @type {Object}
 */
module.exports = {
  headers: {
    'Content-Type': {
      description: 'JSON-API Content Type of HTTP Request ' +
        '(application/vnd.api+json)',
      example: 'application/vnd.api+json'
    }
  }
}
