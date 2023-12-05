// Importar o modulo redline
const readline = require('readline')

// Essa variavel rl recebe a funcao criar interface
const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout

})



rl.question("Me dê uma nota", nota1 => {
    rl.question("Me dê outra nota", nota2 => {
        let media = (parseFloat(nota1) + parseFloat(nota2)) / 2
        let resposta = "Sua Média é igual a: " + media
        console.log(resposta)
    })
        
})