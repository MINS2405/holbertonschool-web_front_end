import Currency from './3-currency.js';

/**
 * Represents a currency with code and name.
 */
export default class Currency {
    /**
     * Initializes a new instance of the Currency class.
     * @param {string} code - The currency code.
     * @param {string} name - The currency name.
     */
    constructor(code, name) {
      if (typeof code !== 'string') {
        throw new TypeError('Code must be a string');
      }
      if (typeof name !== 'string') {
        throw new TypeError('Name must be a string');
      }
  
      this._code = code;
      this._name = name;
    }
  
    /**
     * Gets the currency code.
     * @returns {string} The currency code.
     */
    get code() {
      return this._code;
    }
  
    /**
     * Sets the currency code.
     * @param {string} value - The new currency code.
     */
    set code(value) {
      if (typeof value !== 'string') {
        throw new TypeError('Code must be a string');
      }
      this._code = value;
    }
  
    /**
     * Gets the currency name.
     * @returns {string} The currency name.
     */
    get name() {
      return this._name;
    }
  
    /**
     * Sets the currency name.
     * @param {string} value - The new currency name.
     */
    set name(value) {
      if (typeof value !== 'string') {
        throw new TypeError('Name must be a string');
      }
      this._name = value;
    }
  
    /**
     * Displays the full currency information in the format "name (code)".
     * @returns {string} The formatted currency string.
     */
    displayFullCurrency() {
      return `${this._name} (${this._code})`;
    }
  }  