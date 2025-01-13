function heroes() {
  const objeto = this.response;

  const header = document.querySelector("header");
  const h1 = document.createElement("h1");
  h1.append(objeto["squadName"]);
  header.append(h1);

  const p = document.createElement("p");
  p.append(
    "Hometown:" + objeto["homeTown"] + " // Formed: " + objeto["formed"]
  );
  header.append(p);
  let squad = objeto["members"];
  let section = document.querySelector("section");
  for (const element of squad) {
    let articl = document.createElement("article");
    let h2 = document.createElement("h2");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let p4 = document.createElement("p");

    h2.append(element.name);
    articl.append(h2);
    p2.append("Secret Identity: " + element.secretIdentity);
    articl.append(p2);
    p3.append("Age: " + element.age);
    articl.append(p3);
    p4.append("Superpowers:");
    articl.append(p4);
    section.append(articl);
    let ul = document.createElement("ul");
    for (const element2 of element.powers) {
      let li = document.createElement("li");
      li.append(element2);
      ul.append(li);
      console.log(element2);
    }
    articl.append(ul);
  }
}
const xhr = new XMLHttpRequest();
xhr.open("GET", "superheroes.json");
xhr.responseType = "json";
xhr.send();
xhr.addEventListener("load", heroes);
