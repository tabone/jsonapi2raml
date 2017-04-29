'use strict'

/**
 * Contains the names of RAML Objects common to all REST APIs that follow the
 * JSON-API Spec.
 * @type {Object}
 */
module.exports = {
  /**
   * Contains the names of RAML Types.
   * @type {Object}
   */
  types: {
    /**
     * Name of RAML Type representing a JSON-API Error object.
     * Ref: http://jsonapi.org/format/#error-objects
     *
     * @example
     *   {
     *     "title": "",
     *     "detail": ""
     *   }
     * @type {String}
     */
    error: 'Error',

    /**
     * Name of RAML Type representing a JSON-API Source object.
     * Ref: http://jsonapi.org/format/#error-objects
     *
     * @example
     *   {
     *     "parameter": "include",
     *     "pointer": "/data/attributes/first-name"
     *   }
     * @type {String}
     */
    source: 'Source',

    /**
     * Name of RAML Type representing a JSON-API Top-Level Document showing a
     * list of errors.
     * Ref: http://jsonapi.org/format/#document-top-level
     *
     * @example
     *   {
     *     "errors": [{...}]
     *   }
     * @type {String}
     */
    errorDocument: 'ErrorDocument',

    /**
     * Name of RAML Type representing a JSON-API Resource object.
     * Ref: http://jsonapi.org/format/#document-resource-objects
     *
     * @example
     *   {
     *     "id" :"1",
     *     "type": "user",
     *     "attributes": {...},
     *     "relationships: {...}
     *   }
     * @type {String}
     */
    resourceObject: 'ResourceObject',

    /**
     * Name of RAML Type representing a JSON-API To-One Relationship object.
     * Ref: http://jsonapi.org/format/#document-resource-object-relationships
     *
     * @example
     *   {
     *     "data": {...}
     *   }
     * @type {String}
     */
    toOneRelationship: 'ToOneRelationship',

    /**
     * Name of RAML Type representing a JSON-API Resource Identifier object.
     * Ref: http://jsonapi.org/format/#document-resource-identifier-objects
     *
     * @example
     *   {
     *     "id": "",
     *     "type": ""
     *   }
     * @type {String}
     */
    resourceIdentifier: 'ResourceIdentifier',

    /**
     * Name of RAML Type representing a JSON-API To-Many Relationship object.
     * Ref: http://jsonapi.org/format/#document-resource-object-relationships
     *
     * @example
     *   {
     *     data: [{...}]
     *   }
     * @type {String}
     */
    toManyRelationship: 'ToManyRelationship'
  },

  /**
   * Contains the names of RAML Traits.
   * @type {Object}
   */
  traits: {
    /**
     * Name of RAML Trait representing the JSON-API Header required to be
     * provided in all HTTP Requests & Responses.
     * Ref: http://jsonapi.org/format/#content-negotiation-clients
     * @type {String}
     */
    jsonAPIHeader: 'JSONApiHeader',

    /**
     * Name of RAML Trait representing the JSON-API Sort Query Parameter.
     * Ref: http://jsonapi.org/format/#fetching-sorting
     *
     * @example
     *   ?sort=name,-age
     * @type {String}
     */
    sortQueryParam: 'SortQueryParam',

    /**
     * Name of RAML Trait representing the JSON-API Fields Query Parameter.
     * Ref: http://jsonapi.org/format/#fetching-sparse-fieldsets
     *
     * @example
     *   ?fields[user]=name,surname
     * @type {String}
     */
    fieldsQueryParam: 'FieldsQueryParam',

    /**
     * Name of RAML Trait representing the JSON-API Include Query Parameter.
     * Ref: http://jsonapi.org/format/#fetching-includes
     *
     * @example
     *   ?include=comments
     * @type {String}
     */
    includeQueryParam: 'IncludeQueryParam',

    /**
     * Name of RAML Trait representing the JSON-API Page Limit Query Parameter.
     * Ref: http://jsonapi.org/format/#fetching-pagination
     *
     * @example
     *   ?page[limit]=10
     * @type {String}
     */
    pageLimitQueryParam: 'PageLimitQueryParam',

    /**
     * Name of RAML Trait representing the JSON-API Page Offset Query Parameter.
     * Ref: http://jsonapi.org/format/#fetching-pagination
     *
     * @example
     *   ?page[limit]=10
     * @type {String}
     */
    pageOffsetQueryParam: 'PageOffsetQueryParam'
  },

  /**
   * Contains the names of RAML Resource Types.
   * @type {Object}
   */
  resourceTypes: {
    /**
     * Name of RAML Resource Type representing the HTTP Requests & Responses
     * that can be made to `/{type}/` endpoint.
     * @type {String}
     */
    singleResource: 'SingleResourceEndpoint',

    /**
     * Name of RAML Resource Type representing the HTTP Requests & Responses
     * that can be made to `/{type}/{id}/` endpoint.
     * @type {String}
     */
    multipleResource: 'MultipleResourceEndpoint',

    /**
     * Name of RAML Resource Type representing the HTTP Requests & Responses
     * that can be made to `/{type}/{id}/relationships/{relationship-name}/`
     * endpoint when the relationship is a To-One Relationship.
     * @type {String}
     */
    toOneRelationship: 'ToOneRelationshipEndpoint',

    /**
     * Name of RAML Resource Type representing the HTTP Requests & Responses
     * that can be made to `/{type}/{id}/relationships/{relationship-name}/`
     * endpoint when the relationship is a To-Many Relationship.
     * @type {String}
     */
    toManyRelationship: 'ToManyRelationshipEndpoint',

    /**
     * Name of RAML Resource Type representing the HTTP Requests & Responses
     * that can be made to `/{type}/{id}/{relationship-name}/` endpoint when the
     * relationship is a To-One Relationship.
     * @type {String}
     */
    toOneResourceRelationship: 'ToOneResourceRelationshipEndpoint',

    /**
     * Name of RAML Resource Type representing the HTTP Requests & Responses
     * that can be made to `/{type}/{id}/{relationship-name}/` endpoint when the
     * relationship is a To-Many Relationship.
     * @type {String}
     */
    toManyResourceRelationship: 'ToManyResourceRelationshipEndpoint'
  }
}
