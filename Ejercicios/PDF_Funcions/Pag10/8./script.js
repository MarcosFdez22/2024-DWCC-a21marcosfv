function desglose(int) {
  const BilletesMonedas = [500, 200, 100, 50, 20, 10, 5];
}

const BilletesMonedas = [500, 200, 100, 50, 20, 10, 5];

function log(item, index) {
  console.log("Index " + index + " " + item);
}

BilletesMonedas.forEach(log);

const evenNumbers = BilletesMonedas.filter((num) => num % 2 === 0);

console.log(evenNumbers);
