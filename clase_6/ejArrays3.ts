import * as rls from "readline-sync";

let nroDeseadoArreglo : number [] = new Array (5);
let indice : number, nro : number;

for (indice = 0; indice < 5; indice++){
    nro = rls.questionInt(`Ingrese el nro que desea incorporar en la posicion ${indice}: `);
    nroDeseadoArreglo[indice]=nro;
}
for (indice = 0; indice < 5; indice++){
    console.log(`El nro en la posicion ${indice} es ${nroDeseadoArreglo[indice]}`);
}