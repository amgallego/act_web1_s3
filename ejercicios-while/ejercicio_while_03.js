const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const contraseñaCorrecta = "admin123";
let intentosFallidos = 0;

function pedirContraseña() {
  rl.question('Ingresa la contraseña: ', (respuesta) => {
    if (respuesta === contraseñaCorrecta) {
      console.log(`Acceso concedido. Intentos fallidos: ${intentosFallidos}`);
      rl.close();
    } else {
      intentosFallidos++;
      console.log('Contraseña incorrecta. Intenta de nuevo.');
      pedirContraseña(); 
    }
  });
}

pedirContraseña();