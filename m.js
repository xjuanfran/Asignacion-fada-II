function count(x, exponente, baseAux = 1, baseAux2 = 1, cont = 0, cont2 = 2) {
  if (x == 0) {
    return 0;
  }

  sumaOne = 1 + Math.pow(cont, exponente);
  cont++;
  console.log(sumaOne)


  sumaEqual = Math.pow(baseAux, exponente) + Math.pow(baseAux2, exponente);

  //   if (sumaEqual > x) {
  //     return 0;
  //   }

  //console.log(sumaEqual);

  sumaDifBase = Math.pow(baseAux, exponente) + Math.pow(cont2, exponente);
  //console.log(cont2);

  //   if (sumaDifBase > x) {
  //     return 0;
  //   }

  //console.log(sumaDifBase);

  if (baseAux > x || baseAux2 > x) {
    return 0;
  }

  if (sumaEqual == x || sumaDifBase == x || sumaOne == x) {
    return 1;
  } else {
    return count(x, exponente, baseAux + 1, baseAux2 + 1, cont,cont2+1);
  }
}

console.log(count(29, 2));
