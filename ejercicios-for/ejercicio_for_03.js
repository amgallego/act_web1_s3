let numeros = [];
for (let i = 0; i < 20; i++) {
  numeros.push(Math.floor(Math.random() * 100) + 1);
}

console.log("Array generado:");
console.log(numeros);

let mayor = numeros[0];
let menor = numeros[0];
let suma = 0;
let pares = 0;
let impares = 0;

for (let i = 0; i < numeros.length; i++) {
  let num = numeros[i];

  if (num > mayor) mayor = num;
  if (num < menor) menor = num;

  suma += num;

  if (num % 2 === 0) {
    pares++;
  } else {
    impares++;
  }
}

let promedio = suma / numeros.length;

console.log("\nResultados del análisis:");
console.log(`Número mayor: ${mayor}`);
console.log(`Número menor: ${menor}`);
console.log(`Suma total: ${suma}`);
console.log(`Promedio: ${promedio.toFixed(2)}`);
console.log(`Pares: ${pares}`);
console.log(`Impares: ${impares}`);

