[![npm version](https://badge.fury.io/js/jsonapi2raml.svg)](https://badge.fury.io/js/jsonapi2raml)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# jsonapi2raml
Utility used to generate [RAML v1.0](https://github.com/raml-org/raml-spec/blob/master/versions/raml-10/raml-10.md/) Documentation for REST APIs that follow the [JSON-API spec](http://jsonapi.org/format/).

## Installation
    npm install jsonapi2raml

## Demo
[![Demo](https://img.youtube.com/vi/LG8ZIgmzXAw/0.jpg)](https://www.youtube.com/watch?v=LG8ZIgmzXAw)

## CLI
### Usage
    jsonapi2raml <file-name> <file-output> [options]

> Note: To use `jsonapi2raml` from CLI you need to install it [globally](https://docs.npmjs.com/cli/install).

| Options      | Description |
| ------------ | ----------- |
| `<payload>`  | The name of the file containing the payload which `jsonapi2raml` will parse to generate the RAML Documenation. [More info about the structure of this file below](#payload-structure). |
| `<output>`   | The name of the file or directory where `jsonapi2raml` will be generating the RAML documentation in. |
| `version`   | Shows version. |

## API
You can use the API directly:

```javascript
const jsonapi2raml = require('jsonapi2raml')
jsonapi2raml.generate({
  payload: [...],
  output: 'path/to/raml',
  generator: jsonapi2raml.generators.singleFile
})
```

### Generators
A `Generator` is a function that will be invoked by `jsonapi2raml` once the parsing has been done. This function will be invoked with the following info: 

- Output file name.
- Generated RAML objects.

Example of a `Generator` argument:
```javascript
{
  output: 'path/to/raml',
  assets: {
    // The names of RAML Types common to all REST APIs which follow the JSON-API
    // Spec. More info in '/src/libs/asset-names.js'
    names: {..},
    raml: {
      // RAML Endpoints.
      endpoints: {..},
      // RAML Trait Representational objects common to all REST APIs which
      // follow the JSON-API Spec
      traits: {..},
      // RAML Resource Types Representational objects common to all REST APIs
      // which follow the JSON-API Spec
      resourceTypes: {..},
      types: {
        // RAML Types Representational objects common to all REST APIs which
        // follow the JSON-API Spec
        generic: {..},
        // RAML Types Representational objects related to the provided JSON-API
        // Resources
        payload: {..}
      }
    }
  }
}
```

### Default Generators
`jsonapi2raml` comes with the following generators:

#### Single File
Generates the RAML Documentation in a single file.

```javascript
const jsonapi2raml = require('jsonapi2raml')
jsonapi2raml.generate({
  payload: [...],
  output: 'path/to/raml',
  generator: jsonapi2raml.generators.singleFile
})
```

## Payload Structure
For `jsonapi2raml` to generate the RAML Documentation of a REST API that follow the [JSON-API spec](http://jsonapi.org/format/) all it needs is info about the `JSON-API Resource`s.

Example of a `Payload` file:
```javascript
[{
  "type": "user",
  "attributes": {
    "name": {
      "type": "string",
      "maxLength": 10,
      "pattern": "/[a-zA-Z]/"
    },
    "age": "integer"
  },
  "relationships": {
    "token": {
      "data": {
        "type": "token"
      }
    }
  }
}, {
  "type": "token",
  "attributes": {
    "value": "string",
    "created": "datetime"
  }
}]
```

> Note: The value of an attribute should be a [RAML Built-in Type](https://github.com/raml-org/raml-spec/blob/master/versions/raml-10/raml-10.md/#built-in-types).

# Acknowledgments
Thanks for your feedback & support!
- [gdebat](https://github.com/gdebat)
- [giulio90](https://github.com/giulio90)
- [isaacchircop](https://github.com/isaacchircop)
