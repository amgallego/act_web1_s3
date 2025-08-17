const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const numeroSecreto = Math.floor(Math.random() * 50) + 1;
const intentosMaximos = 7;
let intentos = 0;

console.log("Adivina el número entre 1 y 50. Tienes 7 intentos.");

function pedirIntento() {
  if (intentos >= intentosMaximos) {
    console.log(`Se acabaron los intentos. El número secreto era ${numeroSecreto}.`);
    rl.close();
    return;
  }

  rl.question(`Intento ${intentos + 1}: Ingresa tu número: `, (respuesta) => {
    const numeroUsuario = parseInt(respuesta);

    if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 50) {
      console.log("Entrada inválida. Ingresa un número entre 1 y 50.");
      pedirIntento();
      return;
    }

    intentos++;

    if (numeroUsuario === numeroSecreto) {
      console.log(`Correcto Adivinaste el número en ${intentos} intento(s).`);
      rl.close();
    } else if (Math.abs(numeroUsuario - numeroSecreto) <= 3) {
      console.log("Cerca");
      pedirIntento();
    } else if (numeroUsuario > numeroSecreto) {
      console.log("Muy alto.");
      pedirIntento();
    } else {
      console.log("Muy bajo.");
      pedirIntento();
    }
  });
}

pedirIntento();
