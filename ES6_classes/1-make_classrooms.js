import ClassRoom from './0-classroom';

/**
 * Modifies variables based on a conditional statement while avoiding variable overwriting.
 *
 * @param {boolean} trueOrFalse - The condition to determine whether to modify the variables.
 * @returns {Array} An array containing the modified variables.
 */
export default function taskBlock(trueOrFalse) {
  // Declare variables with let to allow modification
  let task = false;
  let task2 = true;

  // Modify variables based on the condition
  if (trueOrFalse) {
      // Update the external variables
      task = true;
      task2 = false;
  }

  // Return the modified variables
  return [task, task2];
}