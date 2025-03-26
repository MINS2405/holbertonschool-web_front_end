import Airport from './7-airport.js';

/**
 * Represents an airport with name and code.
 */
export default class Airport {
    /**
     * Initializes a new instance of the Airport class.
     * @param {string} name - The name of the airport.
     * @param {string} code - The code of the airport.
     */
    constructor(name, code) {
      if (typeof name !== 'string') {
        throw new TypeError('Name must be a string');
      }
      if (typeof code !== 'string') {
        throw new TypeError('Code must be a string');
      }
  
      this._name = name;
      this._code = code;
    }
  
    /**
     * Gets the name of the airport.
     * @returns {string} The airport name.
     */
    get name() {
      return this._name;
    }
  
    /**
     * Gets the code of the airport.
     * @returns {string} The airport code.
     */
    get code() {
      return this._code;
    }
  
    /**
     * Returns a string representation of the airport.
     * @returns {string} The airport code.
     */
    toString() {
      return `[object ${this._code}]`;
    }
  }  