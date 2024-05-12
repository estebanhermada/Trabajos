import * as rls from "readline-sync";
let nombre : string = rls.question("Introduzca su nombre: ");
let apellido : string = rls.question("Introduzca su apellido: ");

function devolverNombreCompleto (nombre: string, apellido: string): string {
    let nombreCompleto = nombre + " " + apellido;
    return nombreCompleto;
}

console.log("EL nombre completo es: ", devolverNombreCompleto(nombre, apellido));