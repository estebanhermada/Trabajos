import * as rls from "readline-sync";

//la clave correcta es una constante porque siempre es cierta
//se tienen 3 intentos y el contador ofrece la chance de ingresar la clave 3 veces
const claveCorrecta : string = "eureka";
let intentos : number = 3;
let claveIngresada : string = rls.question("Ingrese su clave: ");
let contador : number = 1;

//mientras que el contador no llegue a 3 intentos habiendo ingresado mal la clave, se vuelve a repetir el proceso
while ((contador<=intentos) && (claveCorrecta != claveIngresada)) {
    let claveIngresada = rls.question("La clave ingresada es incorrecta. Vuelva a intentarlo: ");
    contador++;
}

if (claveIngresada != claveCorrecta) {
    console.log("Ud ha agotado los intentos permitidos");
} else {
    console.log("La clave ingresada es correcta");
}

