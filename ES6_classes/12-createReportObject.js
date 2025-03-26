import { employees } from './data/employees.js';

/**
 * Crée un objet de rapport contenant tous les employés regroupés par département
 * et une méthode pour obtenir le nombre de départements.
 *
 * @param {Object} employeesList - Un objet avec les noms de départements comme clés et des tableaux d'employés comme valeurs.
 * @returns {Object} Un objet avec 'allEmployees' et la méthode 'getNumberOfDepartments'.
 */
export default function createReportObject(employeesList) {
    // Initialize an empty object to store all employees grouped by department
    const allEmployees = { ...employeesList };

    // Define a method to get the number of departments
    function getNumberOfDepartments(allEmployees) {
        // Return the number of keys (departments) in allEmployees
        return Object.keys(allEmployees).length;
    }

    // Return an object containing allEmployees and the getNumberOfDepartments method
    return {
        allEmployees,
        getNumberOfDepartments
    };
}