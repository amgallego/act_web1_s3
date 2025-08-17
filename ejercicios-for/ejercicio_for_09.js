let sumaTotal = 0;

console.log("Secuencia:");

for (let i = 0; i < 10; i++) {
  let termino = 2 ** i;  // 2 elevado a la i
  console.log(termino);
  sumaTotal += termino;
}

console.log(`\nSuma total de la secuencia: ${sumaTotal}`);
