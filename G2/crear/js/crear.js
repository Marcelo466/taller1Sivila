// crear elementos 
const seccion = document.getElementById("miseccion1");
const lista = document.createElement("ul");

// creado un elemento de la lista
const elemento = document.createElement("li");
// adicionar un estilo
elemento.classList.add("uno","dos");

// adicionado un texto
elemento.innerText="mi primer elemento";

lista.append(elemento);

seccion.append(lista);

const elemento2 = document.createElement("li");
elemento2.innerText ="Segundo Elemento"
lista.append(elemento2);

