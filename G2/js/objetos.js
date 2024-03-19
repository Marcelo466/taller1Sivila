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
