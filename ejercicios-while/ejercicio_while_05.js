function calcularFactorial(numero) {
  let factorial = 1;
  let contador = 1;

  console.log(`Calculando el factorial de ${numero}:`);

  while (contador <= numero) {
    console.log(`${factorial} x ${contador} = ${factorial * contador}`);
    factorial *= contador;
    contador++;
  }

  console.log(`\nEl factorial de ${numero} es: ${factorial}`);
}


calcularFactorial(5);