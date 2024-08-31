"use strict"
 
let btn = document.getElementById("btn");
btn.addEventListener("click", function() {
    let tiempoBomba = 5;
    setTimeout(function() {
        cuentaRegresiva(tiempoBomba)
    }, 5000);
});

function cuentaRegresiva(i) {
    let intervalo = setInterval(() => {
        console.log(i);
        if (i === 0) {
            clearInterval(intervalo);
            alert("BOOOOM");
        }else{
            i--;
        }
    }, 1000);
}