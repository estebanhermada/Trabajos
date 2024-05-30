import * as rls from "readline-sync";
let nombres : string [] = new Array (2);
let numeros : number[] = new Array (3);
let index : number;

for (index = 0; index <2; index++){
    nombres[index]=rls.question(`indique el nombre de la posicion ${index}: `);
}

for (index = 0; index <3; index++){
    numeros[index]=rls.questionInt(`indique numero de la posicion ${index}: `);
}

for (index = 0; index <2; index++){
    console.log(`El nombre en la posicion ${index} es: ${nombres[index]}`);
}

for (index = 0; index <3; index++){
    console.log(`El numero en la posicion ${index} es: ${numeros[index]}`);
}