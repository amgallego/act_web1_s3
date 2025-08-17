const frase = "Vamos a contar vocales.";
const vocales = ['a', 'e', 'i', 'o', 'u'];
const contador = { a: 0, e: 0, i: 0, o: 0, u: 0 };

const fraseMinuscula = frase.toLowerCase();

for (let i = 0; i < fraseMinuscula.length; i++) {
  const letra = fraseMinuscula[i];
  if (vocales.includes(letra)) {
    contador[letra]++;
  }
}

console.log("Conteo de vocales:");
for (const vocal of vocales) {
  console.log(`${vocal}: ${contador[vocal]}`);
}

