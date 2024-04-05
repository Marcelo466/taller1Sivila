var lista = document.querySelectorAll("section > div");
console.log(lista);
function inicializar() {
    lista.forEach(hijo => hijo.children[1].textContent=0);
}
function aColor(rojo, verde, azul) {

    const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
   
    document.body.style.backgroundColor = colorRGB;
   
}
function mifuncion (){
    
    console.log(this.children[0].value);
    console.log(this.children[1].outerHTML);
    this.children[1].textContent = this.children[0].value;
    aColor(document.getElementById('rojo').value,document.getElementById('verde').value,document.getElementById('azul').value);
}
for (const l of lista) {
l.addEventListener("change",mifuncion);
}