const textoOriginal = "Anita lava la tina";

const texto = textoOriginal.toLowerCase().replace(/\s+/g, '');

let esPalindromo = true;
const longitud = texto.length;

for (let i = 0; i < longitud / 2; i++) {
  if (texto[i] !== texto[longitud - 1 - i]) {
    esPalindromo = false;
    break;
  }
}

console.log(`Texto original: "${textoOriginal}"`);
if (esPalindromo) {
  console.log("Es un palíndromo.");
} else {
  console.log("No es un palíndromo.");
}
