//O innerHTML, innerText e textContent da etiqueta “Escolle sexo”:

const sexo =
  document.querySelector("form").lastElementChild.previousElementSibling;
console.log(sexo.innerHTML);
console.log(sexo.innerText);
console.log(sexo.textContent);

// O valor do primeiro input de sexo
console.log(sexo.querySelector("input").getAttribute("value"));

// O valor do sexo que estea seleccionado.
console.log(sexo.querySelector("input:checked").getAttribute("value"));

// O texto de cada un dos elementos <li>
const lis = document.querySelectorAll("li");
lis.forEach((li) => console.log(li.innerText));

// Indica cantos elementos <li> hai.
const lis2 = document.querySelectorAll("li").length;
console.log("Son " + lis2);

//Indica o valor do atributo data-widget-name
const widget = document
  .querySelector("[data-widget-name]")
  .getAttribute("data-widget-name");
console.log(widget);
