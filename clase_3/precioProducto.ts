import * as readlineSync from "readline-sync";
let precioProducto : number = readlineSync.questionInt("450");
let descuento : number = 10; //descuento en %
let precioFinal : number;
precioFinal = (precioProducto - (precioProducto * descuento / 100));
console.log("El precio a pagar es de: $" + precioFinal);