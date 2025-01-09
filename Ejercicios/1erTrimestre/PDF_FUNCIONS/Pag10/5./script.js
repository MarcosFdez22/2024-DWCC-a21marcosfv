const arrayEntrada = [7, 2, 3, 4, 1];

const minMax = (array) => {
  let mayor = Math.max(...array);
  let menor = Math.min(...array);

  const Obxecto = {
    min: menor,
    max: mayor,
  };
  return Obxecto;
};
console.log(minMax(arrayEntrada));
