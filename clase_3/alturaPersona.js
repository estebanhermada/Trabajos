"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var alturaPersona = readlineSync.questionInt("ingrese la altura:");
console.log("La altura es " + alturaPersona);
