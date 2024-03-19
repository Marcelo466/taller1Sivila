function calcular(pnumero) {
    // que sea un numero impar
    if ((pnumero % 2 !=0))   {
        if (pnumero > 0 ) {
        document.getElementById('etiqueta').style.backgroundColor="white";
        document.getElementById('etiqueta').innerText ='';
        document.getElementById('formulario').submit();
        } else {
            document.getElementById('etiqueta').style.backgroundColor="red";
            document.getElementById('etiqueta').innerText='introdujo un numero no natural';
        }
    }else {
        document.getElementById('etiqueta').style.backgroundColor="red";
        document.getElementById('etiqueta').innerText='introdujo un numero par';
    }
    document.getElementById('lnumero').innerText=0;
}