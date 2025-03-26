import ClassRoom from './0-classroom.js';

/**
 * Initializes and returns an array of ClassRoom objects.
 * @returns {ClassRoom[]} An array of ClassRoom objects.
 */
export function initializeRooms() {
  return [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34)
  ];
}