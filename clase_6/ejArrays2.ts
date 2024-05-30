import * as rls from "readline-sync";

let nroIngresado : number[] = new Array (5);
let indice : number = 0;
nroIngresado[0]=rls.questionInt("Ingrese el primer numero: ");
nroIngresado[1]=rls.questionInt("Ingrese el segundo numero: ");
nroIngresado[2]=rls.questionInt("Ingrese el tercer numero: ");
nroIngresado[3]=rls.questionInt("Ingrese el cuarto numero: ");
nroIngresado[4]=rls.questionInt("Ingrese el quinto numero: ");

while (indice <5){
    console.log("El numero en la posicion ", indice, "es", nroIngresado[indice]);
    indice++;
}