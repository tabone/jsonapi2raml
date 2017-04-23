# jsonapi2raml

Utility used to generate [RAML v1.0](https://github.com/raml-org/raml-spec/blob/master/versions/raml-10/raml-10.md/) Documentation for REST APIs that follow the [JSON-API spec](http://jsonapi.org/format/).

## Installation

    npm install jsonapi2raml

## CLI

### Usage

    jsonapi2raml <payload> <output>

> Note: To use `jsonapi2raml` from CLI you need to install it [globally](https://docs.npmjs.com/cli/install).

| Options      | Description |
| ------------ | ----------- |
| `<payload>`  | The name of the file containing the payload which `jsonapi2raml` will parse to generate the RAML Documenation. [More info about the structure of this file below](#payload-structure). |
| `<output>`   | The name of the file or directory where `jsonapi2raml` will be generating the RAML documentation in. |

## API
You can use the API directly:

```javascript
const jsonapi2raml = require('jsonapi2raml')
jsonapi2raml.generate({
  payload: [...],
  output: 'path/to/raml',
  generator: jsonapi2raml.singleFile
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
  generator: jsonapi2raml.singleFile
})
```

## Payload Structure

For `jsonapi2raml` to generate the RAML Documentation of a REST API that follow the [JSON-API spec](http://jsonapi.org/format/) all it needs is info about the `JSON-API Resource`s.

Example of a `Payload` file:
```javascript
[{
    "type": "user",
    "attributes": {
        "name": "string",
        "date": "datetime"
    },
    "relationships": {
        "friends": {
            "data": [{
                "type": "user"
            }]
        }
    }
}, ...]
```

> Note: The value of an attribute should be a [RAML Built-in Type](https://github.com/raml-org/raml-spec/blob/master/versions/raml-10/raml-10.md/#built-in-types).

