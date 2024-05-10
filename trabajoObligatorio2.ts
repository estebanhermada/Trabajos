import * as rls from "readline-sync";
// estimada Vivi, en este trabajo recurri a internet para establecer la funcion, dado que 
// por el momento aun no termino de afianzarlo. El resto lo realice en base a ejercicios de clase.

let i : number;
let base : number = rls.questionInt("Ingrese el numero base: ");
let exponente : number = rls.questionInt("Ingrese el exponente: ");
let resultadoFinal : number;

function calcularPotencia(base : number, exponente : number) {
    if (exponente ==0) {
        return 1;
    }else if (exponente ==1) {
        return base;
    }else{
        let resultado = 1;
        for (i = 0; i < exponente; i++) {
            resultado *= base;
        }
        return resultado;
    }
}

resultadoFinal = calcularPotencia(base, exponente);
console.log("El resultado final es: ", resultadoFinal);
