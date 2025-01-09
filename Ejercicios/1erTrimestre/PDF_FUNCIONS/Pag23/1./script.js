const objects = [{ price: 1 }, { price: 2 }, { price: 3 }];

resultado = objects.reduce(
  (accumulator, currentValue, index) => accumulator + currentValue.price,
  0
);
console.log("Resultado = " + resultado);
