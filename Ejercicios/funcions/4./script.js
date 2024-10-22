const suma = (...numeros) => {
  let resultado = 0
  let contador = 0
  for (const cont of numeros) {
    contador+=1
  }
  for (const numero of numeros) {
    resultado += numero
  }
  resultado= resultado/contador
  return resultado
}

console.log(suma(1, 1, 1, 1, 1, 1, 1, 1, 1, 12))