"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var precioProducto = readlineSync.questionInt("450");
var descuento = 10; //descuento en %
var precioFinal;
precioFinal = (precioProducto - (precioProducto * descuento / 100));
console.log("El precio a pagar es de: $" + precioFinal);
