import * as rls from "readline-sync";
let nota : number;
let suma : number;
let promedio : number;
let contador : number;
contador = 1;
suma = 0;

while (contador<=10){
    nota = rls.questionInt("Ingrese una nota: ");
    suma = suma + nota;
    contador = contador +1;
}
promedio = suma/10;
console.log("El promedio de las notas es: " + promedio);