const seccion = document.getElementById('miseccion');
// crear los componentes 

// crear un formulario 

const formulario = document.createElement('form');
formulario.setAttribute('id','miformulario');
formulario.setAttribute('method','post');
formulario.setAttribute('action','final');

const nombreEst = document.createElement('input');
nombreEst.setAttribute('type','text');
nombreEst.setAttribute('name','minombre');
nombreEst.setAttribute('value','introdusca un nombre');
nombreEst.setAttribute('maxlength', '15');

formulario.append(nombreEst);

const salto = document.createElement('br');
formulario.append(salto);

// boton de envio 
const enviarBoton = document.createElement('INPUT');
console.log(enviarBoton);
enviarBoton.setAttribute('type','submit');
enviarBoton.setAttribute('name','aceptar');
enviarBoton.setAttribute('value','BOTONCITO');


// radio button 
const radio = document.createElement('INPUT');
radio.setAttribute('type','radio');
radio.setAttribute('name','sexo');
radio.setAttribute('value','masculino'); 

const em = document.createElement('label');
em.innerText='MASCULINO';


const ef = document.createElement('label');
ef.innerText='FEMENINO';

const radio1 = document.createElement('INPUT');
radio1.setAttribute('type','radio');
radio1.setAttribute('name','sexo');
radio1.setAttribute('value','femenino');


formulario.append(radio);
formulario.append(em);
formulario.append(radio1);
formulario.append(ef);

formulario.append(salto);

formulario.append(enviarBoton);

seccion.append(formulario);