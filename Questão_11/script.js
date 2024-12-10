let frase = "toda ciência seria supérflua se houvesse coincidência imediata entre a aparência e a essência das coisas";

let caracteres = frase.split("");

let contagemDeA = caracteres.reduce((acc, char) => {
  return char === "a" ? acc + 1 : acc;
}, 0);

console.log(`Quantidade a: ${contagemDeA}`);
