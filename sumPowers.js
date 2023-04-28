/**2 .Encuentre el número de formas en que un entero dado, X puede expresarse como la
suma de las N-esima potencias de números. Por ejemplo si X = 12 y N = 2, , entonces
todas las combinaciones de cuadradoes que sumados den 13, la única solución es*/

console.log(count(98, 2));
console.log(count(13, 2));
console.log(count(10, 2));
console.log(count(18, 3));

/**
 *
 * @param {number} x - number to find
 * @param {number} exponent - exponent of the numbers
 * @param {number} num - auxiliary number
 * @param {number} num3 - auxiliary number
 * @returns {String & number } - String whether or not it found a solution and a number (1 for yes and 0 for no)
 */
function count(x, exponent, num = 1, num3 = 1) {
  //Base case: if x is 0 or greater than 1000, return 0
  if (x == 0 || x > 1000) {
    return 0;
  }

  let found = 0;
  let num2 = 1;
  // Variables to store the sum of the numbers
  let IterativeSum = Math.pow(num, exponent) + Math.pow(num2, exponent);
  let sumConst = Math.pow(num, exponent) + Math.pow(num3, exponent);

  if (sumConst == x) {
    console.log("found: ", num, "y", num3);
    found = 1;
    return found;
  }
  if (IterativeSum == x) {
    console.log("found: ", num2, "y", num);
    found = 1;
  } else if (IterativeSum > x) {
    num2 = num2 + 1;
    num = num - 1;
    IterativeSum = Math.pow(num, exponent) + Math.pow(num2, exponent);
    if (IterativeSum == x) {
      console.log("found:", num2, "y", num);
      found = 1;
    } else {
      console.log("No se encontró ninguna solución");
    }
  } else if (num > x) {
    console.log("No se encontró ninguna solución");
    found = 0;
  } else {
    found = count(x, exponent, num + 1, num3 + 1);
  }

  return found;
}

