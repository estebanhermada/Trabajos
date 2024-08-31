"use strict";


function cambiarTexto() {
    let titulo=document.querySelector("#inpText").value;
    document.getElementById("titulo").innerText=titulo;
} //esta funcion cambia el titulo (innerText) por el ingresado por el usuario

let button=document.querySelector("#button1").addEventListener("click", cambiarTexto);
/*function cambiarTexto() {
    let titulo="Valor agregado por mi";
    document.getElementById("titulo").innerText=titulo;    
} // esta funcion daria un texto predeterminado por el programador

/*document.getElementById("titulo");
console.log(document.getElementById("titulo")); //para que la consola muestre desde que linea de codigo traigo un script
console.log(document.getElementById("titulo").innerText); //para que la consola muestre el texto en "titulo"*/