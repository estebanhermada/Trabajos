import * as rls from "readline-sync";

let cantidad : number = rls.questionInt(`Ingrese la cantidad de numeros: `);
let arregloIngresado : number[] = new Array (cantidad);

for (let index = 0; index < cantidad; index++) {
    arregloIngresado[index] = rls.questionInt(`Indique el arreglo ` + index);    
}

for (let index = cantidad -1; index >=0; index--){
    console.log(arregloIngresado[index], ` `);
}