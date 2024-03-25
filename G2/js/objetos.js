/*
var mascota = {
    nombre: 'Terry',
    edad: 2
}
var alumno = {
    ru : 123,
    nombre: "Carlos",
    ap: "Rios",
    am: "Fernandez",
    materiasprogramadas: ['fisica 2','ingles','redes'],
    m : mascota
}
mensaje = "nombre es:"+alumno.nombre+ "apellido paterno:"+alumno.ap+ 
" " + alumno.am+ " \n Me gustan estas materias:"+alumno.materiasprogramadas[1]+
" \n Mi perrito es:"+ alumno.m.nombre;
alert(mensaje);


var hola = "yo tengo una mascota que es un perro";
// mostrarlo en forma de un vector
var pasar = hola.split(" ");
console.log(pasar);
pasar.push("Pasar");
console.log(pasar);
*/
/* mostrar todos los elementos de la lista */
/*let visualizar1 = document.querySelector("section > p");
console.log(visualizar1);*/
/*let visualizar2 = document.querySelectorAll("section > p");
console.log(visualizar2);
*/
var visualizarlista = document.querySelectorAll("ul");
console.log(visualizarlista);

console.log('tamano lista hijos:'+ visualizarlista[1].children.length);
console.log ('tamano lista:'+visualizarlista.length);
for (var j=0;j < visualizarlista.length;j++){
for(var i=0; i < visualizarlista[j].children.length;i++){
    console.log(visualizarlista[j].children[i].innerHTML);
    
}
}
// como visualizo todos los elementos de la lista

// PINTAR DE COLOR ROJO LOS ELEMENTOS IMPARES DE LAS LISTA(S)