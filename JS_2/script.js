"use strict";




let button=document.querySelector("#button1").addEventListener("click", (event)=>{ //arrow function
    event.preventDefault();                                         //que equivale a function (event) {}
    let param1=document.getElementById("inpText1").value;       //crear la funcion aca permite ahorrar codigo
    let param2=document.getElementById("inpText2").value;
    verificarConParametros(param1, param2)
});

function verificarConParametros(param1, param2) {
    alert("hola " + param1+ " " +param2)
}