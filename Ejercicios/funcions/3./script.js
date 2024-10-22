const suma = (...numeros) => {
  let resultado
  for (const numero of numeros) {
    resultado += numero
  }
  return resultado
}

console.log(suma(1,2,3,4,5))