import { createEmployeesObject } from './11-createEmployeesObject';

console.log(createEmployeesObject("Software", [ "Bob", "Sylvie" ]));
// Output : { Software: [ 'Bob', 'Sylvie' ] }
/**
 * Crée un objet contenant un département et une liste d'employés.
 *
 * @param {string} departmentName - Le nom du département.
 * @param {Array<string>} employees - La liste des employés.
 * @returns {Object} Un objet avec le département comme clé et la liste des employés comme valeur.
 */
export default function createEmployeesObject(departmentName, employees) {
    // Utilise l'opérateur de propriété calculée pour définir dynamiquement le nom de la propriété
    return {
        [departmentName]: employees
    };
}