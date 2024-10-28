const numbers = [102, 91, 3, 29, 9, 4, 9, 3, 29, 102, 91, 4];

const minNumber = numbers.reduce((acumulador, currentValue) =>
  acumulador < currentValue ? acumulador : currentValue
);

console.log(minNumber);
