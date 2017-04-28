'use strict'

/**
 * Function used to validate the value of the arguments provided.
 * @param  {Object} argv Arguments parsed by 'yargs' module.
 * @return {Mixed}  TRUE if arguments are valid, else a STRING explaining the
 *                  reason why they are not.
 */
module.exports = argv => {
  // When `jsonapi2raml` CLI is invoked with the `version` flag, it should
  // consider any provided args as valid, since the lib will only be displaying
  // the version before exiting.
  if (argv.version === true) return true

  // User is required to provide:
  //   > Name of the file containing info about the JSON-API Resources which
  //     `jsonapi2raml` will be parsing to create the RAML Documentation (this
  //     file is also refered to as the Payload File).
  //   > Name of the file or directory which `jsonapi2raml` will be generating
  //     the RAML Documentation in.
  if (argv._.length !== 2) {
    return `Expected 2 file names. Got ${argv._.length} instead`
  }

  // If valid return true.
  return true
}
