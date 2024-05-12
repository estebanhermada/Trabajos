import * as rls from "readline-sync";
let vuelta1 : number = rls.questionFloat("Tiempo primera vuelta: ");
    console.log("El tiempo de la primera vuelta es ", vuelta1);
let vuelta2 : number = rls.questionFloat("Tiempo segunda vuelta: ");
    console.log("El tiempo de la segunda vuelta es ", vuelta2);
let vuelta3 : number = rls.questionFloat("Tiempo tercera vuelta: ");
    console.log("El tiempo de la tercera vuelta es ", vuelta3);
let vuelta4 : number = rls.questionFloat("Tiempo cuarta vuelta: ");
    console.log("El tiempo de la cuarta vuelta es ", vuelta4);
let tiempoFinal : number;
tiempoFinal = (vuelta1 + vuelta2 + vuelta3 + vuelta4);
    console.log("El tiempo final es: ", tiempoFinal);
let promedioDeVueltas : number;
promedioDeVueltas = tiempoFinal % 4;
    console.log("Promedio de vueltas: ", promedioDeVueltas);



