import * as rls from "readline-sync";

let dimensionArreglo : number = rls.questionInt("Indique la dimension del arrelgo: ");
let nombresPersonas : string [] = new Array (dimensionArreglo);
let indice : number = 0;

for (indice = 0; indice < dimensionArreglo; indice++){
    nombresPersonas[indice]=rls.question(`Indique el nombre que quiere poner en el lugar ${indice}: `);
}

for (indice = 0; indice < dimensionArreglo; indice++){
    console.log(`La persona que ingreso en el lugar ${indice} es ${nombresPersonas[indice]}`);
}