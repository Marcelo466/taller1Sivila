const lista = document.getElementById('miseccion');
const elemento = document.createElement("h1");
elemento.id= "titulo1";
elemento.innerText="MI PRIMER TITULO";

const elemento2 = document.createElement("h2");
elemento2.classList.add('miestilo2');
elemento2.id= "segundo2";
elemento2.innerText="MI SEGUNDO TITULO";
elemento2.style.background = "#FFDDDD";

lista.append(elemento);
lista.append(elemento2);

const elemento3 = document.createElement("h2");
elemento3.id= "segundo3";
elemento3.innerText="MI TERCER TITULO";
lista.append(elemento3)
console.log(elemento);
