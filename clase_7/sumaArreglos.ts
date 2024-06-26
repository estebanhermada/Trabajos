import * as rls from "readline-sync";

let arreglo1 : number[] = new Array (6);
let arreglo2 : number[] = new Array (6);
let sumaArreglos : number[] = new Array (6);

for (let index = 0; index < arreglo1.length; index++) {
    arreglo1[index] = rls.questionInt(`Indique el valor del Arreglo1 en la posicion ` + index);
    arreglo2[index] = rls.questionInt(`Indique el valor del Arreglo2 en la posicion ` + index);
    sumaArreglos[index] = arreglo1[index]+arreglo2[index];
}

for (let index = 0; index < sumaArreglos.length; index++) {
   console.log(sumaArreglos[index]);   
}


