/**
 * Represents a course with name, length, and students.
 */
export default class HolbertonCourse {
    /**
     * Initializes a new instance of the HolbertonCourse class.
     * @param {string} name - The name of the course.
     * @param {number} length - The length of the course.
     * @param {string[]} students - An array of student names.
     */
    constructor(name, length, students) {
      if (typeof name !== 'string') {
        throw new TypeError('Name must be a string');
      }
      if (typeof length !== 'number') {
        throw new TypeError('Length must be a number');
      }
      if (!Array.isArray(students) || students.some(student => typeof student !== 'string')) {
        throw new TypeError('Students must be an array of strings');
      }
  
      this._name = name;
      this._length = length;
      this._students = students;
    }
  
    /**
     * Gets the name of the course.
     * @returns {string} The course name.
     */
    get name() {
      return this._name;
    }
  
    /**
     * Sets the name of the course.
     * @param {string} value - The new course name.
     */
    set name(value) {
      if (typeof value !== 'string') {
        throw new TypeError('Name must be a string');
      }
      this._name = value;
    }
  
    /**
     * Gets the length of the course.
     * @returns {number} The course length.
     */
    get length() {
      return this._length;
    }
  
    /**
     * Sets the length of the course.
     * @param {number} value - The new course length.
     */
    set length(value) {
      if (typeof value !== 'number') {
        throw new TypeError('Length must be a number');
      }
      this._length = value;
    }
  
    /**
     * Gets the students in the course.
     * @returns {string[]} An array of student names.
     */
    get students() {
      return this._students;
    }
  
    /**
     * Sets the students in the course.
     * @param {string[]} value - An array of new student names.
     */
    set students(value) {
      if (!Array.isArray(value) || value.some(student => typeof student !== 'string')) {
        throw new TypeError('Students must be an array of strings');
      }
      this._students = value;
    }
  }  