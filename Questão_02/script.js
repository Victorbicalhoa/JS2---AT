let planetas = ["Mercúrio", "Vênus", "Terra", "Marte", "Júpiter", "Saturno", "Urano", "Netuno", "Plutão", "Ceres"];

planetas.splice(planetas.indexOf("Terra"), 1);
planetas.splice(planetas.indexOf("Urano"), 1, "Terra");

let marte = planetas.indexOf("Marte");
let jupter = planetas.indexOf("Júpiter");
[planetas[marte], planetas[jupter]] = [planetas[jupter], planetas[marte]];

console.log(planetas);
