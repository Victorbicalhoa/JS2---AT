let numeros = [3, 1, 2, 5];
let contagens = [];


for (let numero of numeros) {
  let temp = [];
  
  for (let i = 1; i <= numero; i++) {
    temp.push(i);
  }  
  
  contagens.push(temp);
}

console.log(contagens);
