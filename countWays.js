function countWaysRecursive(X, N, num = 1) {
  // Caso base
  if (X === 0) {
    return 1;
  }

  if (X < 0 || num > Math.pow(X, 1 / N)) {
    return 0;
  }

  // Caso recursivo
  let currentPower = Math.pow(num, N);
  let result1 = countWaysRecursive(X - currentPower, N, num + 1);
  let result2 = countWaysRecursive(X, N, num + 1);
  return result1 + result2;
}

console.log(countWaysRecursive(29, 2));
