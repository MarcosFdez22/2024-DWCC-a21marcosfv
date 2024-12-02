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

function horasyseg(minutos) {
  horas = minutos / 60
  mins = minutos % 60

  console.log ("Son " + Math.floor(horas)+ " hora  y " + mins + " minutos ")    
}
  
horasyseg(70)

//3. Crea unha función que dado o radio dun círculo, devolva a súa área. E fai outra función que reciba o radio e devolva o perímetro do círculo. Mostra por consola o resultado das funcións usando dúas cifras decimais.

function areacirculo(radio) {
  return area = Math.PI * Math.pow(radio, 2)
}

function permitrocirculo(radio) {
  return perimetro = 2 * Math.PI * radio
  
}

console.log(permitrocirculo(10).toFixed(2))

console.log(areacirculo(10).toFixed(2))