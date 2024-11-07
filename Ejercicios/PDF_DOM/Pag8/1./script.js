// A táboa con id="age-table".
console.log(document.getElementById("age-table"));

//Todos os elementos label dentro da táboa (debería haber 3).
console.log(document.forms[1].querySelectorAll("label"));

// O primeiro td da táboa.
console.log(document.querySelector("td"));

// O formulario con name="search".
console.log(document.querySelector("form[name='search']"));

// O primeiro input do formulario anterior.
console.log(
  document.querySelector("form[name='search']").querySelector("input")
);

//O último input do formulario do apartado anterior.
console.log(
  document.querySelector("form[name='search']").querySelectorAll("input")[1]
);
