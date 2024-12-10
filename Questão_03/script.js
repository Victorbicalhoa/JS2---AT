let planetas = ["Mercúrio", "Vênus", "Terra", "Marte", "Júpiter", "Terra", "Urano", "Netuno", "Plutão", "Ceres"];

const indiceTerra = planetas.indexOf("Terra");

if (indiceTerra !== -1) {
  planetas.splice(0, indiceTerra);
}

const lastIndiceTerra = planetas.lastIndexOf("Terra");

if (lastIndiceTerra !== -1 && lastIndiceTerra > 0) {
  planetas.splice(0, lastIndiceTerra);
}

console.log(planetas);
