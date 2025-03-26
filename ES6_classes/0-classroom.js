/**
 * Represents a classroom with a maximum number of students.
 */
export default class ClassRoom {
    /**
     * Initializes a new instance of the ClassRoom class.
     * @param {number} maxStudentsSize - The maximum number of students allowed.
     */
    constructor(maxStudentsSize) {
      this._maxStudentsSize = maxStudentsSize;
    }
  
    /**
     * Displays the maximum number of students allowed in the classroom.
     */
    displayMaxStudents() {
      console.log(`Maximum students allowed: ${this._maxStudentsSize}`);
    }
  }  