import * as fs from 'node:fs';

let precios : number[] = [525, 3500, 400, 1999];
let contenido : string= " ";

for (let index = 0; index < precios.length; index++) {
    contenido += `${precios[index]} `;    
}

fs.writeFileSync('./precios.txt', contenido);
console.log("Los precios son: ");

const datos : string = fs.readFileSync('./precios.txt', 'utf-8');
const datos2 : string = datos.trim();
const preciosArray : string[] = datos2.split(" ");
console.log(preciosArray);

let productos : string[] = ["Leche", "Galletitas", "Harina", "Queso"];
let contenido2 : string= " ";

for (let index = 0; index < productos.length; index++) {
    contenido2 += `${productos[index]} `;    
}

fs.writeFileSync('./productos.txt', contenido2);
console.log("Los productos son: ");

const datos3 : string = fs.readFileSync('./productos.txt', 'utf-8');
const datos4 : string = datos.trim();
const productosArray : string[] = datos4.split(" ");
console.log(productosArray);