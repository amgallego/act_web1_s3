function calcularPotencia(base, exponente) {
  let resultado = 1;
  console.log(`Calculando ${base} elevado a ${exponente}:`);

  for (let i = 1; i <= exponente; i++) {
    resultado *= base;
    console.log(`Paso ${i}: ${base}^${i} = ${resultado}`);
  }

  return resultado;
}

const base = 3;
const exponente = 4;
const potencia = calcularPotencia(base, exponente);

console.log(`Resultado final: ${base}^${exponente} = ${potencia}`);
