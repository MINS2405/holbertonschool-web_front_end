import { HolbertonClass, StudentHolberton } from './8-hbtn_class.js';

/**
 * Represents a HolbertonClass with year and location.
 */
export class HolbertonClass {
    /**
     * Initializes a new instance of the HolbertonClass class.
     * @param {number} year - The year of the class.
     * @param {string} location - The location of the class.
     */
    constructor(year, location) {
      this._year = year;
      this._location = location;
    }
  
    /**
     * Gets the year of the class.
     * @returns {number} The year.
     */
    get year() {
      return this._year;
    }
  
    /**
     * Gets the location of the class.
     * @returns {string} The location.
     */
    get location() {
      return this._location;
    }
  }
  
  /**
   * Represents a StudentHolberton with first name, last name, and HolbertonClass.
   */
  export class StudentHolberton {
    /**
     * Initializes a new instance of the StudentHolberton class.
     * @param {string} firstName - The first name of the student.
     * @param {string} lastName - The last name of the student.
     * @param {HolbertonClass} holbertonClass - The HolbertonClass of the student.
     */
    constructor(firstName, lastName, holbertonClass) {
      this._firstName = firstName;
      this._lastName = lastName;
      this._holbertonClass = holbertonClass;
    }
  
    /**
     * Gets the full name of the student.
     * @returns {string} The full name.
     */
    get fullName() {
      return `${this._firstName} ${this._lastName}`;
    }
  
    /**
     * Gets the HolbertonClass of the student.
     * @returns {HolbertonClass} The HolbertonClass.
     */
    get holbertonClass() {
      return this._holbertonClass;
    }
  
    /**
     * Gets the full student description.
     * @returns {string} The full student description.
     */
    get fullStudentDescription() {
      return `${this._firstName} ${this._lastName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`;
    }
  }
  
  // Créez des instances de HolbertonClass
  const class2019 = new HolbertonClass(2019, 'San Francisco');
  const class2020 = new HolbertonClass(2020, 'San Francisco');
  
  // Créez des instances de StudentHolberton
  const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
  const student2 = new StudentHolberton('John', 'Doe', class2020);
  const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
  const student4 = new StudentHolberton('Donald', 'Bush', class2019);
  const student5 = new StudentHolberton('Jason', 'Sandler', class2019);
  
  // Liste des étudiants
  export const listOfStudents = [student1, student2, student3, student4, student5];  