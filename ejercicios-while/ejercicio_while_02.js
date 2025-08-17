let numero = 2;           
let suma = 0;
let cantidadPares = 0;

while (numero <= 50) {
  suma += numero;
  cantidadPares++;
  numero += 2;           
}

console.log("Suma de números pares entre 1 y 50:", suma);
console.log("Cantidad de números pares sumados:", cantidadPares);