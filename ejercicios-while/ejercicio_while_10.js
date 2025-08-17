const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let suma = 0;
let cantidad = 0;
let calificacionMasAlta = null;
let calificacionMasBaja = null;

console.log("Ingresa las calificaciones (ingresa -1 para terminar):");

function pedirCalificacion() {
  rl.question(`Calificación ${cantidad + 1}: `, (input) => {
    let calificacion = parseFloat(input);

    if (isNaN(calificacion)) {
      console.log("Ingresa un número válido.");
      pedirCalificacion();
      return;
    }

    if (calificacion === -1) {
      if (cantidad === 0) {
        console.log("No se ingresaron calificaciones.");
      } else {
        const promedio = suma / cantidad;
        console.log("\n Resultados:");
        console.log(`- Promedio: ${promedio.toFixed(2)}`);
        console.log(`- Calificación más alta: ${calificacionMasAlta}`);
        console.log(`- Calificación más baja: ${calificacionMasBaja}`);
      }
      rl.close();
      return;
    }

    if (calificacion < 0 || calificacion > 100) {
      console.log("Ingresa una calificación entre 0 y 100 (o -1 para terminar).");
      pedirCalificacion();
      return;
    }

    suma += calificacion;
    cantidad++;

    if (calificacionMasAlta === null || calificacion > calificacionMasAlta) {
      calificacionMasAlta = calificacion;
    }

    if (calificacionMasBaja === null || calificacion < calificacionMasBaja) {
      calificacionMasBaja = calificacion;
    }

    pedirCalificacion();
  });
}

pedirCalificacion();
