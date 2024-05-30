function cantidadDeDivisores(num : number): number {	
    let contador : number = 0;
    
    for (let i = 1; i <= num; i++){
        if (num % i === 0){	
        contador++;
        }
    }

    return contador;
}


let numIngresado : number = 16;
console.log(`la cantidad de divisores de ${numIngresado} es:  ${cantidadDeDivisores(numIngresado)}`);