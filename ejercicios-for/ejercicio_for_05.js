const textoOriginal = "Hola mundo";
let textoInvertido = "";

for (let i = textoOriginal.length - 1; i >= 0; i--) {
  textoInvertido += textoOriginal[i];
}

console.log("Cadena original:", textoOriginal);
console.log("Cadena invertida:", textoInvertido);

