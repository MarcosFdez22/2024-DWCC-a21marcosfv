//O número de ligazóns da páxina.
const nume = document.querySelectorAll("a").length;
console.log(nume);

//A dirección da penúltima ligazón.
const pen = document.querySelectorAll("a");
console.log(pen[pen.length - 2].getAttribute("href"));

//O número de ligazóns que apuntan a http://proba
const pen2 = document.querySelectorAll("a[href = 'http://proba']");
console.log(pen2.length);

// O número de ligazóns do terceiro parágrafo.
const pa3 = document.getElementsByTagName("p");
console.log(pa3[2].querySelectorAll("a").length);

//Modifica o estilo das ligazóns que apuntan a http://proba para que teñan o texto de cor laranxa.
const pen3 = document
  .querySelectorAll("a[href = 'http://proba']")
  .forEach((enlace) => (enlace.style.color = "orange"));
