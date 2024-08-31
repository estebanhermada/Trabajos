"use strict"

let contenedor = document.getElementById("contenedor");

/*contenedor.innerHTML = "<h1>Vengo desde JS</h1>";*/

//creamos el elemento
/*let element = document.createElement("h2");
//creamos el texto para ese elemento
let text = document.createTextNode("texto");
//con esto le paso el texto a mi elemento
element.appendChild(text);
//con esto le agrego el elemento a mi contenedor. Es como una cadena, o arbol
contenedor.appendChild(element);*/

let lista = document.getElementById("lista");
const productos = ["Pan", "Leche", "Carne"];
const precios = [2000, 1500, 8000];

function pintarProductos(arrayProductos, arrayPrecios){
    for(let i = 0; i < arrayProductos.length; i++){
    let li = document.createElement("li");
    let texto = document.createTextNode(`Nombre: ${arrayProductos[i]} - Precio: $${arrayPrecios[i]}`);
    li.appendChild(texto);
    lista.appendChild(li);
    }
}

pintarProductos(productos, precios);