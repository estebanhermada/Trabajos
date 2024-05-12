import * as readlineSync from 'readline-sync';
let alturaPersona : number = readlineSync.questionInt("ingrese la altura:"); 
console.log("La altura es " + alturaPersona);