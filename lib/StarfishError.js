const ExtendableError = require('./ExtendableError');

/**
 * A nice error class so we can do an instanceOf check.
 */
class StarfishError extends ExtendableError {
  /**
   * Constructor, error message for now.
   *
   * @param {string} message
   * The message of the error being thrown.
   */
  constructor(message) {
    super(message);
  }
}

module.exports = StarfishError;
