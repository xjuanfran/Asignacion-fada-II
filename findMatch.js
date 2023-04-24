vector1 = [6 ,5, 4, 3, 2, 1];
vector2 = [0];
vector3 = [9,8,7,6,5];

/**
 * @param {array} array - Array of numbers
 * @param {number} start - Search start index
 * @param {number} fin - End of search index
 * @returns {boolean} - True if there is a match, false otherwise
*/
function findMatch(array, start = 0, end = array.length - 1) {
    //base case: if start is greater than end, no match
    if (start > end) {
      return false;
    }

    const half = Math.floor((start + end) / 2);

    // Si el valor de la mitad del arrayeglo coincide con su índice, retornar verdadero
    // If the value of the middle of the array is equal to its index, return true
    if (array[half] === half) {
      return true;
    }

    // If the value of the middle of the array is greater than its index,
    // search in the right half of the array (lesser values)
    if (array[half] > half) {
      return findMatch(array, half + 1, end);
    }


    // If the value of the middle of the array is less than its index,
    // search in the left half of the array (greater values)
    return findMatch(array, start, half - 1);
  }

console.log(findMatch(vector1));
console.log(findMatch(vector2));
console.log(findMatch(vector3));
