import * as rls from "readline-sync";

let sueldoInicial : number = rls.questionInt("Ingrese su sueldo: ");
let sueldoConAumento : number;

if (sueldoInicial <= 15000){
    let aumento = sueldoInicial * 0.20; 
    sueldoConAumento = sueldoInicial + aumento;
    console.log("Su sueldo con aumento es de: ", sueldoConAumento);
} else if (sueldoInicial <= 20000){
    let aumento = sueldoInicial * 0.10; 
    sueldoConAumento = sueldoInicial + aumento;
    console.log("Su sueldo con aumento es de: ", sueldoConAumento);
} else if (sueldoInicial <= 25000){
    let aumento = sueldoInicial * 0.05; 
    sueldoConAumento = sueldoInicial + aumento;
    console.log("Su sueldo con aumento es de: ", sueldoConAumento);
} else (sueldoInicial > 25000);
    let aumento = 0; 
    sueldoConAumento = sueldoInicial + aumento;
    console.log("Su sueldo con aumento es de: ", sueldoConAumento);
