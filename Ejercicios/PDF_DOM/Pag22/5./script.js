// 5. Escribe o código JavaScript para inserir “<li>2</li><li>3</li>” entre os dous <li>
// seguintes:
// <ul id="listaULExercicio5">
// <li id="one">1</li>
// <li id="two">4</li>
// </ul>

const li1 = document.getElementById("one");
const li4 = document.getElementById("two");

const li2 = document.createElement("li");
const li3 = document.createElement("li");

li2.id = "one and half";
li3.id = "1.75";

li2.textContent = "2";
li3.textContent = "3";

li1.after(li2);
li4.before(li3);
