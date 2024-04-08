//crear elementos
const divformulario = document.getElementById('formulario');
const formulario = document.createElement('form');

//crear elementos del formulario
const labelnombre = document.createElement('label');
labelnombre.innerHTML = "Nombre: ";
const inputnombre = document.createElement('input');
inputnombre.setAttribute('type', 'text');
inputnombre.setAttribute('name', 'nombre');
inputnombre.setAttribute('maxlength', '15');
formulario.append(labelnombre);
formulario.append(inputnombre);
const divnombre = document.createElement('div');
formulario.append(divnombre);
formulario.append(document.createElement('br'));

const labelgrado = document.createElement('label');
labelgrado.innerHTML = "Grado de Instrucción: ";
const selectgrado = document.createElement('select');
selectgrado.setAttribute('name', 'grado');
const opciongrado = ['Colegio', 'Licenciatura', 'Maestría', 'Doctorado', 'Ninguno'];
opciongrado.forEach(function(opcion) {
    const opcionelemento = document.createElement('option');
    opcionelemento.innerHTML = opcion;
    selectgrado.appendChild(opcionelemento);
});
formulario.append(labelgrado);
formulario.append(selectgrado);
const divgrado = document.createElement('div');
formulario.append(divgrado);
formulario.append(document.createElement('br'));

const labeledad = document.createElement('label');
labeledad.textContent = "Edad: ";
const inputedad = document.createElement('input');
inputedad.setAttribute('type', 'number');
inputedad.setAttribute('name', 'edad');
inputedad.setAttribute('min', '0');
inputedad.setAttribute('max', '150');
formulario.append(labeledad);
formulario.append(inputedad);
const divedad = document.createElement('div');
formulario.append(divedad);
formulario.append(document.createElement('br'));

const botonenviar = document.createElement('input');
botonenviar.setAttribute('type', 'submit');
botonenviar.setAttribute('value', 'Enviar');
formulario.append(botonenviar);

const botonlimpiar = document.createElement('input');
botonlimpiar.setAttribute('type', 'reset');
botonlimpiar.setAttribute('value', 'Limpiar');
formulario.append(botonlimpiar);

//enviar formulario a pagina destino
formulario.setAttribute('action', 'destino');
//insertar el formulario en el div 
divformulario.append(formulario);



