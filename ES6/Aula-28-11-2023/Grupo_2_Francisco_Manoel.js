const os = require('os')

const readline = require('readline')

// Essa variavel rl recebe a funcao criar interface
const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout

})



const plataforma = os.platform()
var memoriaLivre = os.freemem() / 1024 / 1024 / 1024


function atualiza() {
    console.log("Nossa plataforma é " + plataforma + " e nosso Sistema Operacional é " + os.type())
    memoriaLivre = os.freemem() / 1024 / 1024 / 1024
    console.log("GB disponiveis: " + memoriaLivre.toFixed(1))
    console.table(os.cpus())
}

setInterval(atualiza,2000)