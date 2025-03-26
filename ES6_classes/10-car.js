import Car from './10-car';

/**
 * Modifie chaque valeur d'un tableau en y ajoutant une chaîne.
 *
 * @param {Array} array - Le tableau à modifier.
 * @param {string} appendString - La chaîne à ajouter à chaque valeur.
 * @returns {Array} Le tableau modifié.
 */
export default function appendToEachArrayValue(array, appendString) {
    // Utilise for...of pour itérer sur les valeurs du tableau
    for (let idx = 0; idx < array.length; idx++) {
        array[idx] = appendString + array[idx];
    }

    return array;
}