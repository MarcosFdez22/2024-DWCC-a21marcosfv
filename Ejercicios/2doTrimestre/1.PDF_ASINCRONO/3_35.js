let button = document.querySelector("input");
button.addEventListener("click", () => {
  const numeroAleatorio = Math.floor(Math.random() * 1025) + 1;
  const requestURL = "https://pokeapi.co/api/v2/pokemon/" + numeroAleatorio;

  fetch(requestURL)
    .then((response) => response.json())
    .then((data) => pokemon(data));
});
button.click();
function pokemon(data) {
  let foto = document.getElementById("imagen");
  let nombre = document.getElementById("name");
  let minuscula = data.name;
  let ul = document.querySelector("ul");
  ul.innerHTML = "";
  nombre.innerHTML = "";
  for (const abiliti of data.abilities) {
    let a = document.createElement("a");
    a.href = abiliti.ability.url;
    let li5 = document.createElement("li");
    const mina = abiliti.ability.name;
    const firstLettere = mina.charAt(0);
    const firstLettereCap = firstLettere.toUpperCase();
    const remainingLetteres = mina.slice(1);
    const mayusculability = firstLettereCap + remainingLetteres;

    li5.append(mayusculability);
    a.append(li5);
    ul.append(a);
  }
  const firstLetter = minuscula.charAt(0);
  const firstLetterCap = firstLetter.toUpperCase();
  const remainingLetters = minuscula.slice(1);

  const mayuscula = firstLetterCap + remainingLetters;
  nombre.append(mayuscula);
  foto.src = data.sprites.front_default;
  console.log(data);
}
