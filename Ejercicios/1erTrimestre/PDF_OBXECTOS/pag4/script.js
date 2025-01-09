//1 Dada a seguinte constante, fai as operacións necesarias para que o primeiro carácter estea en maiúscula:
const cadea = "desenvolvemento web";

const novaCadea = cadea.replace("d", "D");

console.log(novaCadea);

//2 Crea unha función á que se lle pase unha cadea e devolva a cadea en sentido inverso.

function reverseString(str) {
  let element = "";
  let words = str.split("");
  for (let index = words.length - 1; index >= 0; index--) {
    element += words[index];
  }
  return element;
}
console.log(reverseString("I am a string"));

//3. Crea unha función á que se lle pase unha cadea de números e devolva unha cadea da mesma lonxitude formada por * e as últimas 4 cifras do parámetro de entrada. console.log(enmascarar(“1234123412347777”)); // ************7777
function enmascarar(str) {
  let cuatro = str.slice(-4);
  let enmascarado = cuatro.padStart(str.length, "*");
  return enmascarado;
}
console.log(enmascarar("1234123412347777"));
