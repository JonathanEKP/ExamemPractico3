function validarEdad(){
    var edad; 
    var nombre= document.getElementById("name").value;
    edad = prompt("Introduzca su edad: ");
    if(edad<18){
        alert(nombre+", eres menor ("+edad+" años)")
    }
    else{
        alert(nombre+", eres mayor ("+edad+" años)")
    }
}