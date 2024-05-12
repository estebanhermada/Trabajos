"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var valorIngresado = rls.questionInt("Ingrese un numero: ");
if (valorIngresado == 0) {
    console.log("El numero ingresado es 0");
}
else if (valorIngresado % 2 == 0) {
    console.log("El numero ingresado es par");
}
else {
    console.log("El numero ingresado es impar");
}
