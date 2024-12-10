const duplas = [ [3, 5], [7, 1], [6, 8], [4, 9], [2, 3], [8, 1], [5, 7], [9, 6], [1, 4], [2, 8] ];

const duplasFiltradas = duplas.filter(([a, b]) => (a % 2 !== b % 2));

const somas = duplasFiltradas.map(([a, b]) => a + b);

console.log(somas);
