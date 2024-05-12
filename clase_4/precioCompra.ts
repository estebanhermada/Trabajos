import * as rls from "readline-sync";
let precioProducto : number = rls.questionInt("Indique el precio del producto: ");
let cantidad : number = rls.questionInt("Indique la cantidad de productos comprados: ");
let descuento : number = 0.9; //descuento en %
let precioFinal : number; 
precioFinal = (precioProducto * cantidad); 

if (precioProducto > 1000){
    console.log("El precio final es: " + (precioFinal) * descuento);
}else{
    console.log("El precio final es: " + precioFinal);
}