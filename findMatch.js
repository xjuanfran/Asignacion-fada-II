/** 1. Dado un vector de números enteros ordenado decrecientemente, diseñad un método
tal que compruebe si el valor de alguno de los elementos del vector coincide con su
índice.*/

//Solution 1

vector1 = [6, 5, 4, 3, 2, 1];
vector2 = [0];
vector3 = [9, 8, 7, 6, 5];

/**
 * @param {array} array - Array of numbers
 * @param {number} start - Search start index
 * @param {number} fin - End of search index
 * @returns {boolean} - True if there is a match, false otherwise
 */
function findMatch(array, start = 0, end = array.length - 1) {
  // 1. If the start index is greater than the end index, return false.
  if (start > end) {
    return false;
  }

  // 2. Calculate the half-way point between the start and end indexes.
  const half = Math.floor((start + end) / 2);

  // 3. If the half-way value is equal to the half-way index, return true.
  if (array[half] === half) {
    return true;
  }

  // 4. if the value of the half index is greater than half, search the upper half of the array recursively.
  if (array[half] > half) {
    return findMatch(array, half + 1, end);
  }

  // 5. Otherwise, recursively search the lower half of the array.
  return findMatch(array, start, half - 1);
}

console.log(findMatch(vector1));
console.log(findMatch(vector2));
console.log(findMatch(vector3));
