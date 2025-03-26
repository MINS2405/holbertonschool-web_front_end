import HolbertonClass from './8-hbtn_class';

/**
 * Represents a HolbertonClass with size and location.
 */
export default class HolbertonClass {
    /**
     * Initializes a new instance of the HolbertonClass class.
     * @param {number} size - The size of the class.
     * @param {string} location - The location of the class.
     */
    constructor(size, location) {
      if (typeof size !== 'number') {
        throw new TypeError('Size must be a number');
      }
      if (typeof location !== 'string') {
        throw new TypeError('Location must be a string');
      }
  
      this._size = size;
      this._location = location;
    }
  
    /**
     * Gets the size of the class.
     * @returns {number} The size.
     */
    get size() {
      return this._size;
    }
  
    /**
     * Gets the location of the class.
     * @returns {string} The location.
     */
    get location() {
      return this._location;
    }
  
    /**
     * Returns the size when the class is cast to a number.
     * @returns {number} The size.
     */
    valueOf() {
      return this._size;
    }
  
    /**
     * Returns the location when the class is cast to a string.
     * @returns {string} The location.
     */
    toString() {
      return this._location;
    }
  }  