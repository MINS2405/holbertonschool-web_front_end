import { createEmployeesObject } from './11-createEmployeesObject';

export default function createEmployeesObject(departmentName, employees) {
    return {
        [departmentName]: employees
    };
}
