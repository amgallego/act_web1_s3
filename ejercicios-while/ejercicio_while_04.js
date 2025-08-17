let contador = 0;
let numero = 0;

while (numero <= 95) {
  numero = Math.floor(Math.random() * 100) + 1;
  console.log("Número generado:", numero);
  contador++;
}

console.log(`Se generaron ${contador} números hasta obtener uno mayor a 95.`);
