import * as rls from "readline-sync";

let i : number, linea : string;
let numero1 : number = rls.questionInt("Ingrese un numero: ");
let numero2 : number = rls.questionInt("Ingrese un numero: ");
let opcionMenu : number = rls.questionInt("Ingrese 1 para sumar, ingrese 2 para restar, o cualquier otra tecla para salir: ");

if (opcionMenu == 1){
    linea = "-";
    for (i = 0; i <= 40; i++){
        linea=linea + "-";
    };
    console.log(linea);
    console.log("El resultado es: ", numero1 + numero2);
    linea = "-";
    for (i = 0; i <= 40; i++){
    linea=linea + "-";
    };
    console.log(linea);
}