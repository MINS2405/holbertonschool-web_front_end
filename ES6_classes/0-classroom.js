import ClassRoom from './0-classroom';

/**
 * Utilise const pour déclarer une variable qui ne change pas.
 *
 * @returns {string} Un message préférant l'utilisation de const.
 */
export function taskFirst() {
  // Déclare une variable avec const
  const task = 'I prefer const when I can.';
  return task;
}

/**
* Fonction supplémentaire pour fournir une chaîne à ajouter.
*
* @returns {string} Une chaîne complémentaire.
*/
export function getLast() {
  return ' is okay';
}

/**
* Utilise let pour déclarer une variable qui peut être modifiée.
*
* @returns {string} Un message combinant plusieurs chaînes.
*/
export function taskNext() {
  // Déclare une variable avec let pour permettre la modification
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
