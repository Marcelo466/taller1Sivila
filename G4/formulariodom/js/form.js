var vectoropciones = [
    {
    1: "uno",
    2: "dos"},
    {
        3: "tres",
        4: "cuatro"},
        {
        5: "cinco",
        6: "seis"}
];


for(var i=0;i<vectoropciones.length;i++){
    console.log(vectoropciones[i]);
}

//console.log(vectoropciones);


const seccion = document.getElementById('miseccion');

// crear formulario 
const formulario = document.createElement('form');
formulario.setAttribute('id','idformulario');
formulario.setAttribute('method','post');
formulario.setAttribute('action','destino');

// nombre input 
const nombre = document.createElement('input');
nombre.setAttribute('type','text');
nombre.setAttribute('maxlength',15);
nombre.setAt
// etiqueta para nombre
const enombre = document.createElement('label');
enombre.innerText="*Nombre";

// realizar salto
const salto = document.createElement('br');

// introducir los datos a partir de un hashmap 

// crear un select 
const grado = document.createElement('select');
grado.setAttribute('id','grado');

const elementoselect = document.createElement('option');
console.log(elementoselect);

elementoselect.setAttribute('value','1');
elementoselect.setAttribute('label','Ninguno');

const elementoselect2 = document.createElement('option');
elementoselect2.setAttribute('value','2');
elementoselect2.setAttribute('label','Colegio');

const elementoselect3 = document.createElement('option');
elementoselect3.setAttribute('value','3');
elementoselect3.setAttribute('label','Universidad');

const elementoselect4 = document.createElement('option');
elementoselect4.setAttribute('value','4');
elementoselect4.setAttribute('label','Maestria');

// etiqueta para grado de instruccion 
// etiqueta para nombre
const egrado = document.createElement('label');
egrado.innerText="*Grado de Instruccion";


grado.append(elementoselect);
grado.append(elementoselect2);
grado.append(elementoselect3);
grado.append(elementoselect4);


// rango edad 
const edad = document.createElement('input');
edad.setAttribute('type','range');
edad.setAttribute('min','0');
edad.setAttribute('max','110');

// boton enviar el formulario 
const boton = document.createElement('button');
boton.setAttribute('type','submit');
boton.setAttribute('id','enviar');
boton.setAttribute('name','ENVIAR');
boton.setAttribute('value','ENVIAR');
boton.innerText="aceptar";


formulario.append(enombre);
formulario.append(nombre);
formulario.append(salto);
formulario.append(egrado);
formulario.append(grado);
formulario.append(salto);
formulario.append(edad);
formulario.append(salto);
formulario.append(boton);


seccion.append(formulario);
console.log(seccion);