let duplas = [ [3, 7], [5, 2], [8, 4], [1, 9], [6, 3] ];

let somaTotal = 0;

for (const dupla of duplas) {
  for (const numero of dupla) {
    somaTotal += numero;
  }
}

console.log("A soma total dos números do vetor é:", somaTotal);
