/**
 * Represents a building with square footage.
 * This class is intended to be abstract and should not be instantiated directly.
 */
export default class Building {
    /**
     * Initializes a new instance of the Building class.
     * @param {number} sqft - The square footage of the building.
     */
    constructor(sqft) {
      if (typeof sqft !== 'number') {
        throw new TypeError('Square footage must be a number');
      }
  
      this._sqft = sqft;
    }
  
    /**
     * Gets the square footage of the building.
     * @returns {number} The square footage.
     */
    get sqft() {
      return this._sqft;
    }
  
    /**
     * This method must be overridden by any subclass of Building.
     * @throws {Error} If not implemented by subclass.
     */
    evacuationWarningMessage() {
      if (this.constructor === Building) {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
  }  