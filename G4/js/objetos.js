/*var valor = Number("10ccc");
console.log(valor);
console.log("CADENAS");
var valor1 = String("1000ccccc");
console.log(valor1);
console.log(typeof valor1);
console.log("CARACTERES EN UNA CADENA");
var micadena = "MI NOMBRE ES";
var cantidad = micadena.length;
console.log(micadena.toLowerCase()); 
console.log(cantidad); */
/*
var tmascota = {
    nombre: "Terry",
    edad: 2,
    mostrar : function (){
        return "nombre M : "+ this.nombre + " edad M:  " + this.edad; 
    }
}
var persona = {
    ci : 4143,
    ap: "jose",
    am: "mata",
    vdireccion : ["b. juan xxii calle 1 y calle 3","zona el tejar campus universitario"],
    mascota: tmascota 
}
mensaje = "ci:" + persona.ci + "Ap: " + persona.ap + "\n am:"+
persona.am + " DIRECCIONES: " + persona.vdireccion[1] + "\n MASCOTA:"+ 
persona.mascota.mostrar();
alert (mensaje);
*/
/*
var lista = new Array(1,2,3,4,5,6);
console.log(lista); 
console.log(typeof lista);
lista.push(7);
lista.push(8);
lista.push(9);
console.log(lista);
var cadena = new String("uno","dos","tres","cuatro","cinco");
console.log(cadena);

var vector = new String ("Hola esta es una nueva cadena");
console.log("cadena"+vector);
resultado = vector.split(" ");
console.log(resultado);
*/
// poner algun texto que identifique que ha sido encontrado el elemento de la lista 1 
// y el elemento 2

/*lista = document.querySelector("lista1");
console.log(lista);
console.log(typeof lista);*/
//lista2 = document.querySelectorAll("lista1");
/*lista2 = document.getElementById("lista1");
lista2.children[1].outerText = lista2.children[1].outerText+ "ENCONTRADO \n";
lista2.children[2].outerText = lista2.children[2].outerText+ "ENCONTRADO \n";
*/

/*
console.log(lista2);
lista2[1].outerText = lista2[1].outerText + "ENCONTRADO \n";
console.log("elemento:"+ typeof lista2[1])
lista2[2].outerText = lista2[2].outerText + "ENCONTRADO";
*/

/* listar todos los elementos de las listas , tomando en cuenta que no tenemos un id*/
var listas = document.querySelectorAll("ul");
console.log(listas);
for (var i =0; i < listas.length; i++){
    for (var j=0; j < listas[i].children.length; j++){
        console.log(listas[i].children[j].innerHTML);
    }
}


/* visualicen todos los elemento de la lista que sean pares y estos deben aparecer
con un color de fondo amarillo */

listas[1].children[2].style.backgroundColor='red';

function aColor(rojo, verde, azul) {

    const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
   
    document.body.style.backgroundColor = colorRGB;
   
}
aColor(192,192,192);


