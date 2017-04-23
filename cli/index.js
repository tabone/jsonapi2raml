'use strict'

const fs = require('fs')
const options = require('./options')
const validator = require('./validator')
const jsonapi2raml = require('../index')

// Parse arguments.
const argv = require('yargs')
  .usage('Usage: $0 <file-name> <file-output>')
  .example('$0 payload.json payload')
  .options(options)
  .help('h')
  .alias('h', 'help')
  .check(validator)
  .argv

// Read Payload file.
fs.readFile(argv._[0], 'utf-8', (err, content) => {
  // Stop process on error.
  if (err) return console.error(err.message)

  /**
   * Will be storing the content of the payload file in JSON.
   * @type {Object}
   */
  let payload = null

  try {
    // Try parsing the content inside the Payload File.
    payload = JSON.parse(content)
  } catch (e) {
    // Stop process if payload is not a valid JSON.
    console.error('Invalid JSON: ', e.message)
    return
  }

  // Build RAML File.
  jsonapi2raml.generate({
    output: argv._[1],
    resources: payload,
    generator: jsonapi2raml.generators.singleFile
  })
})
