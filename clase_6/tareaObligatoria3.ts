let arregloDado : number[] = [4, 7, 9, 3, 1, 45, 67, 23, 29, 78, 11, 16];
let index : number;
let valorMaximo : number = arregloDado[0];

function calcularMayor(numero: number) : number { 
    if (numero > valorMaximo){
        return numero;
    }
    return valorMaximo; 
}

function esPar (numero: number) : string {
    if (numero%2==0){
        return "par";
    }
    return "impar";
}

for (let index = 0; index < 12; index++) {
    const element = arregloDado[index];
    valorMaximo = calcularMayor(element);
}
console.log("El numero mas alto es: ", valorMaximo, "y es: ", esPar(valorMaximo));


