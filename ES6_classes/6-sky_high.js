import Building from './5-building.js';

/**
 * Represents a SkyHighBuilding with square footage and number of floors.
 */
export default class SkyHighBuilding extends Building {
  /**
   * Initializes a new instance of the SkyHighBuilding class.
   * @param {number} sqft - The square footage of the building.
   * @param {number} floors - The number of floors in the building.
   */
  constructor(sqft, floors) {
    super(sqft); // Pass sqft to the Building constructor

    if (typeof floors !== 'number') {
      throw new TypeError('Floors must be a number');
    }

    this._floors = floors;
  }

  /**
   * Gets the square footage of the building.
   * @returns {number} The square footage.
   */
  get sqft() {
    return super.sqft; // Use the getter from the Building class
  }

  /**
   * Gets the number of floors in the building.
   * @returns {number} The number of floors.
   */
  get floors() {
    return this._floors;
  }

  /**
   * Provides an evacuation warning message specific to SkyHighBuilding.
   * @returns {string} The evacuation warning message.
   */
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}