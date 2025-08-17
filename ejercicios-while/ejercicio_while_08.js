let a = 0;
let b = 1;
let contador = 0;
const limite = 15;

console.log("Secuencia de Fibonacci:");

while (contador < limite) {
  console.log(a);

  let siguiente = a + b;
  a = b;
  b = siguiente;

  contador++;
}