/*
function datosmateria(a){
    console.log('se selecciono la materia de: '+a);
}
*/
// necesitamos agrupar 
var lista = document.querySelectorAll("li");
console.log(lista);

// es una funcion que me devuelva el nombre de la materia
function mostrarNombreMateria(e) {
    console.log(e.target);
    console.log(e.target.innerText);

}

for (const l of lista )
l.addEventListener("click",mostrarNombreMateria);


var listai= document.querySelectorAll("input");
console.log(listai);

for (const li of listai )
li.addEventListener("change",mostrarColor);

function mostrarColor(e) {

    console.log(this.id);
    console.log(e.target.value);
}
