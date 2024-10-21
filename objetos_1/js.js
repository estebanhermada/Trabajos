"use strict"

let contenedor = document.getElementById("mainContainer");


fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
.then(resp => resp.json())
.then(data =>{
    data.results.forEach(pokemon => {
        let pokemonName = document.createElement ("h3");
        let text = document.createTextNode (`Nombre: ${pokemon.name}`);
        pokemonName.appendChild(text);
        contenedor.appendChild(pokemonName)
    });
})
.catch(err => console.log(err))