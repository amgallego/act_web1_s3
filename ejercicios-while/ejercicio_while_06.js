const nombres = ["Ana", "Luis", "Carlos", "María", "Elena", "Juan"];
const nombreBuscado = "María"; 

let index = 0;
let encontrado = false;

while (index < nombres.length) {
  if (nombres[index] === nombreBuscado) {
    console.log(`Nombre "${nombreBuscado}" encontrado en la posición ${index}.`);
    encontrado = true;
    break; 
  }
  index++;
}

if (!encontrado) {
  console.log(`Nombre "${nombreBuscado}" no se encontró en el array.`);
}
