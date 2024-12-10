let frase = "Nesse momento, o BitCoin está em R$ 530.085,52. Loucura, né?";
let precoBitCoin = frase.match(/R\$\s*([\d.]+,\d+)/)[1];

precoBitCoin = precoBitCoin.replace(/\./g, '').replace(',', '.');

let precoNumero = parseFloat(precoBitCoin);
let precoDividido = precoNumero / 3;
let resultado = precoDividido.toFixed(2);

console.log(resultado);
