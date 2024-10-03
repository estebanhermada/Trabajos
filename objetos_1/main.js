"use strict"

/*let data = `{
    "empleados": [
    {"nombre": "Juan", "apellido": "Perez"},
    {"nombre": "Karina", "apellido": "Gonzalez"},
    {"nombre": "Luz", "apellido": "López"},
    {"nombre": "Marcos", "apellido": "Villalba"}
    ]
    }`

let processedData = JSON.parse(data)
console.log(processedData.empleados[0]); // o solo processedData para que muestre todos los datos 

let dataJSON = JSON.stringify(data)
console.log(dataJSON);*/

let personas = [
    {
        nombre: "Juan",
        apellido: "Perez",
        edad: 21,
        sexo: "masculino",
        email: "juan_perez@gmail.com",
    },
    {
        nombre: "Karina",
        apellido: "Gonzalez",
        edad: 35,
        sexo: "femenino",
        email: "karina_gonzalez@gmail.com",
    },
    {
        nombre: "Luz",
        apellido: "Lopez",
        edad: 19,
        sexo: "femenino",
        email: "luz_lopez@gmail.com",
    },
    {
        nombre: "Marcos",
        apellido: "Villalba",
        edad: 47,
        sexo: "masculino",
        email: "marcos_villalba@gmail.com",
    },    
]

let createCard = (persona) => {
    let card = document.createElement("div");
    card.classList.add("card-persona");
    
    let title = document.createElement("h2");
    title.innerHTML = `${persona.nombre} ${persona.apellido}`;
    card.appendChild (title);
    
    let mainContainer = document.getElementById("mainContainer");

    if (mainContainer) {
        mainContainer.appendChild(card); // Añadir la tarjeta al contenedor principal
    } else {
        console.error("No se encontró el contenedor principal");
    }
};

personas.forEach (persona => {
    createCard(persona);
});

let promesa = () => {
    return new Promise((resolve, reject) => {
        let exito = true;

        if (exito) {
            resolve(personas)
        }
        else {
            reject("Promesa fallo")
        }
    })
}

console.log(promesa());

promesa()
     .then(resp => console.log(resp)) // si es exitosa
     .catch(err => console.log(err)) // 

/*const obtenerResultado = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            resolve(persona)
        }, 2000);
    });
}

const procesarDatos = async () => {

    let respuesta = await obtenerResultado();

    console.log(respuesta);
}

procesarDatos()*/

let informacion = fetch("https://fakestoreapi.com/products/1")

console.log(informacion);

fetch("https://fakestoreapi.com/products/1")
.then(resp => resp.json())
.then(data =>{
    console.log(data)
    /*data.forEach(persona => {
             mainContainer.innerHTML += `<h2>Nombre: ${persona.title}</h2>`
    }) */                                       
})

.catch(err => console.log(err))
