var valor = Number("10ccc");
console.log(valor);
console.log("CADENAS");
var valor1 = String("1000ccccc");
console.log(valor1);
console.log(typeof valor1);
console.log("CARACTERES EN UNA CADENA");
var micadena = "MI NOMBRE ES";
var cantidad = micadena.length;
console.log(micadena.toLowerCase()); 
console.log(cantidad); 
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