/*function mostrar(a){
    console.log(a);
    if (a=='naranja') {
        console.log('se selecciono naranja');
    }
    if (a=='cebolla') {
        console.log('se selecciono la cebolla');
    }
}
*/
//const selecionados = document.getElementsByClassName('miclase');
var selec = document.querySelectorAll('li');
//console.log(selecionados);

function mostrar(e){
console.log(e.target.innerText);
}
for (const seleccionado of selec) {
    seleccionado.addEventListener('click',mostrar)
}
