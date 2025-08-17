const matriz = [];

for (let fila = 0; fila < 5; fila++) {
  matriz[fila] = [];
  for (let col = 0; col < 5; col++) {
    matriz[fila][col] = fila + col;
  }
}

for (let fila = 0; fila < 5; fila++) {
  let filaStr = "";
  for (let col = 0; col < 5; col++) {
    filaStr += matriz[fila][col] + "\t"; 
  }
  console.log(filaStr.trim());
}

