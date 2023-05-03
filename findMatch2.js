/** 1. Dado un vector de números enteros ordenado decrecientemente, diseñad un método
tal que compruebe si el valor de alguno de los elementos del vector coincide con su
índice.**/

//Solution 2

vector1 = [6 ,5, 4, 3, 2, 1];
vector2 = [0];
vector3 = [9,8,7,6,5];

/**
 *
 * @param {araay} array - array of numbers
 * @param {*} index - index of the array
 * @returns {boolean} - True if there is a match, false otherwise
 */
function findMatch(array, index = 0) {
  //base case: if start is greater or equal than end, no match
  if (index >= array.length) {
    return false;
  }
  if (!Array.isArray(array)) {
    return ("No es un array");
  } else {
    // If the index of the array is equal to its value, return true
    if (index === array[index]) {
      return true;
    }
    else {
      return findMatch(array, index + 1);
    }
  }
}

console.log(findMatch(vector1));
console.log(findMatch(vector2));
console.log(findMatch(vector3));
console.log(findMatch("hola"));

//Temporal complexity: O(n)