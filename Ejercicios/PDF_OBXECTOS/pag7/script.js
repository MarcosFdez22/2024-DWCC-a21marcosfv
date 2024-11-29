//1. Números aleatorios:
//a. Xera un número enteiro aleatorio entre 0 e 3 (incluídos).
console.log(Math.floor(Math.random() * 4));
//b. Xera un número enteiro aleatorio entre 1 e 3 (incluídos).
console.log(Math.floor(Math.random() * 3) + 1);
//c. Crea unha función que devolva un número enteiro aleatorio entre os dous valores pasados como parámetros. Así, por exemplo, a seguinte instrución debe mostrar un número aleatorio entre 5 e 10 (incluídos): console.log(numeroAleatorio(5, 10));
function numeroAleatorio(min, max) {
  resultado = Math.floor(Math.random() * (max - min + 1) + min);
  return resultado;
}
console.log(numeroAleatorio(5, 10));

//2. Crea unha función á que se lle pase como parámetro o número de minutos e devolva un string indicando a súa equivalencia en horas e minutos
