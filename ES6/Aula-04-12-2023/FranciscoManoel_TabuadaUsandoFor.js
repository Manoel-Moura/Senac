/*
    Olá Futuros Devs! 
    A missão agora é criar uma tabuada que envolva multiplicação, adição, divisão e subtração
    Utilizando a Função For, lembre-se de utilizar Template Literals para facilitar o uso das variáveis e cálculos.
*/

// Importar o modulo redline
const readline = require('readline')

// Essa variavel rl recebe a funcao criar interface
const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout

})


rl.question("Digite um numero: ", numero => {
    for (let i = 1; i <= 10; i++) { // Não usar mais a declarção de variavel 'var'
        console.log(`${numero} + ${i} = ${Number(numero) + i}\t${numero} - ${i} = ${numero - i}\t${numero} x ${i} = ${numero * i}\t${numero} / ${i} = ${(numero / i).toFixed(1)}\t`)
    }
    rl.close()    
})






