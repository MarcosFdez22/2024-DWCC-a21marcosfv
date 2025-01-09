const arrayEntrada = [10, 2, 3, 5, 7, 8, 23, 50];


const numerosImpares2 = array => {
    const impares = [];
    for (const numero of array) {
      if (numero%2!==0) {
          impares.push(numero);
        }
    } return impares;
}

console.log(numerosImpares2(arrayEntrada)); // (4) [3, 5, 7, 23]
