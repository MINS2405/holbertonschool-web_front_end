# ES6 Classes Project

This project demonstrates the use of ES6 classes in JavaScript, including defining classes, adding methods, using static methods, and extending classes.

## Setup

1. Install Node.js 20.x.x and npm 9.x.x.
2. Run `npm install` to install dependencies.
3. Use `npm run dev 0-main.js` to run the main script.
4. Use `npm run test` to run Jest tests.
5. Use `npm run full-test` to run tests and lint the code.

## Testing

To run tests, use the command `npm run test`. To check the code with ESLint, use `npm run full-test`.

## Contributing

This project is open to contributions. To get started, clone the repository and follow the installation instructions.

## HolbertonCourse Class

The `HolbertonCourse` class represents a course with attributes for name, length, and students. It includes getters and setters for each attribute, ensuring type validation during object creation and modification.

## Currency Class

The `Currency` class represents a currency with attributes for code and name. It includes getters and setters for each attribute, ensuring type validation during object creation and modification.

## Pricing Class

The `Pricing` class represents a price with attributes for amount and currency. It includes getters and setters for each attribute, ensuring type validation during object creation and modification.

## Building Class

The `Building` class represents a building with square footage. It is intended to be an abstract class and should not be instantiated directly. Any subclass must implement the `evacuationWarningMessage` method.

## SkyHighBuilding Class

The `SkyHighBuilding` class extends the `Building` class and adds an attribute for the number of floors. It overrides the `evacuationWarningMessage` method to provide a specific warning message for high-rise buildings.

## Airport Class

The `Airport` class represents an airport with attributes for name and code. It includes getters for these attributes and a `toString` method that returns a string representation of the airport.

