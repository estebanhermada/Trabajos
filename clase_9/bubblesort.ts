//este metodo crea un num al azar
function azar(numAzar: number): number{
    return Math.floor(Math.random() * numAzar);
}

//Este método permite cargar un arreglo “arreglo” de dimensión “cantidad” y llenarlo de valores generados al azar entre 0 y “numAzar” (parámetro)
function cargar(arreglo: number[], cantidad: number, numAzar: number){
    for (let i: number = 0; i < cantidad; i++){
        arreglo[i]= azar(numAzar);
    }
}

//este metodo muestra los valores del arreglo
function escribirEnUnaLinea(arreglo: number[], cantidad: number){
    let vector : string = "";
    for (let i = 0; i<cantidad; i++){
        vector += `${arreglo[i]} `;
    }

    console.log(vector);    
}

//metodo para invertir las posiciones dentro del arreglo
function intercambiar(arreglo: number[], i: number, j: number){
    let aux: number;
    aux = arreglo[i];
    arreglo[i] = arreglo[j];
    arreglo[j] = aux;
}

//funcion que compara los valores de los indices
function comparar(arreglo: number[], i: number, j: number): number {
    let comparacion : number;
    if (arreglo[i] === arreglo[j]){
        comparacion = 0;
    } else if (arreglo[i] > arreglo[j]){
        comparacion = -1;
    } else {
        comparacion = 1;
    }

    return comparacion;
}

//funcion burbuja que recibe un arreglo y una cantidad
function burbuja(arreglo : number[], cantidad : number,){
    for (let i = 0; i < cantidad; i++){
        for (let j = 0; j < cantidad -1; j++){
            if (comparar(arreglo, j, j+1)===1){
                intercambiar(arreglo, j, j+1);
            }
        }
    }
}

let limite : number = 10;
let array : number[] = new Array(limite);
cargar(array, limite, 100);
escribirEnUnaLinea(array, limite);
burbuja(array, limite);
escribirEnUnaLinea(array, limite);