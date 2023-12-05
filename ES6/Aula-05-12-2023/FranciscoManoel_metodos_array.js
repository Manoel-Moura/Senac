const numeros = []

for (i = 0; i <= 50; i++) {
    numeros.push(i)
}


var numerosPares = numeros.filter(numeros => numeros % 2 == 0 );
console.log(numerosPares);

var numerosMultiplicados = numeros.map(numeros => numeros * 8)
console.log(numerosMultiplicados);

const copia = numeros.slice(0, numeros.length) // Copiando Array

console.log(`Array Copiado
            ${copia}`);