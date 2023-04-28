function count(x, exponente) {
  // Caso base: si x es 0, la suma es válida
  if (x === 0) {
    return 0;
  }

  // Caso base: si el exponente es 0, solo se puede sumar 1
  if (exponente === 0 || exponente === 1) {
    return x === 0;
  }

  // Buscar el primer número de la combinación
  let num = 1;
  while (Math.pow(num, exponente) <= x) {
    // Buscar recursivamente los siguientes números que sumados al primer número dan x
    if (count(x - Math.pow(num, exponente), exponente - 1)) {
      return 1;
    }
    num++;
  }

  // Si no se ha encontrado ninguna combinación, la suma no es válida
  return 0;
}
console.log(count(18, 3)); // true
