import Currency from './3-currency.js';

/**
 * Represents a pricing with amount and currency.
 */
export default class Pricing {
  /**
   * Initializes a new instance of the Pricing class.
   * @param {number} amount - The price amount.
   * @param {Currency} currency - The currency of the price.
   */
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be an instance of Currency');
    }

    this._amount = amount;
    this._currency = currency;
  }

  /**
   * Gets the price amount.
   * @returns {number} The price amount.
   */
  get amount() {
    return this._amount;
  }

  /**
   * Sets the price amount.
   * @param {number} value - The new price amount.
   */
  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = value;
  }

  /**
   * Gets the currency of the price.
   * @returns {Currency} The currency of the price.
   */
  get currency() {
    return this._currency;
  }

  /**
   * Sets the currency of the price.
   * @param {Currency} value - The new currency of the price.
   */
  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('Currency must be an instance of Currency');
    }
    this._currency = value;
  }

  /**
   * Displays the full price information in the format "amount currency_name (currency_code)".
   * @returns {string} The formatted price string.
   */
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  /**
   * Converts a price by multiplying the amount by a conversion rate.
   * @param {number} amount - The original amount.
   * @param {number} conversionRate - The conversion rate.
   * @returns {number} The converted amount.
   */
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('Amount and conversion rate must be numbers');
    }
    return amount * conversionRate;
  }
}