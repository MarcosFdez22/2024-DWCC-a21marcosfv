const boton = document.querySelector("button");
const ul = document.getElementById("ul1");
const input = document.querySelector("input");
let h1 = document.createElement("h1");

boton.addEventListener("click", () => {
  let id = input.value;

  const requestURL = "https://jsonplaceholder.typicode.com/posts?userId=" + id;
  fetch(requestURL)
    .then((response) => response.json())
    .then((data) => post(data));
});

function post(data) {
  h1.innerHTML = "";
  ul.before(h1);
  h1.append("Post del usuario con id: " + input.value);
  ul.innerHTML = "";
  for (const element of data) {
    const ul2 = document.createElement("ul");
    const h3 = document.createElement("h3");
    h3.append(element.title);
    ul2.append(h3);
    const li = document.createElement("li");
    li.append(element.body);
    ul2.append(li);
    ul.append(ul2);
  }
  console.log(data);
}
