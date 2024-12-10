let numeros = [1, [7, 2, [1, 2, 3, [4, [5, [4, 2, 6, [7, [8, [1, 2, 3, 9, [1, 10]]]]]]]]]];

function flattenArray(array) {
  return array.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), []);
}

let vetor = flattenArray(numeros);

let somaTotal = vetor.reduce((acc, val) => acc + val, 0);

console.log("Soma:", somaTotal);
