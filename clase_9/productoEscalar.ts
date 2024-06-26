import * as rls from "readline-sync";
let dimensionArreglo : number = rls.questionInt(`Ingrese la dimension del arreglo: `);
let arreglo1 : number[] = new Array(dimensionArreglo);
let arreglo2 : number[] = new Array(dimensionArreglo);

function cargarVector(v: number[], dimensionArreglo: number) {
    let i : number;
    for (i = 0; i < dimensionArreglo; i++) {
        v[i]=rls.questionInt("Indique el valor del arreglo en la posicion " + i + ": ");
    }
}

console.log("Cargar vector 1");
cargarVector(arreglo1, dimensionArreglo);
console.log("Cargar vector 2");
cargarVector(arreglo2, dimensionArreglo);

function sumaArreglos (v1:number[], v2:number[], dimensionArreglo:number){
    let acum : number = 0;
    for (let i = 0; i<dimensionArreglo; i++){
        acum = acum + (v1[i]*v2[i]);
    }
    return acum;
}

console.log("El producto escalar de ambos vectores es ", sumaArreglos(arreglo1, arreglo2, dimensionArreglo));
