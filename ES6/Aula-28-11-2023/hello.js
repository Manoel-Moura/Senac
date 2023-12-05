//Shades of Purple

// Importação de módulos do node.js, require é o que faz importar para a variável
const os = require('os')  

const plataforma = os.platform()
var memoriaLivre = os.freemem() /1024 /1024 /1024



// Variavel que usei
console.log("Nossa plataforma é: " + plataforma)
console.log("GB disponiveis: " + memoriaLivre.toFixed(2) )
console.log(os.hostname())
console.table(os.cpus())

// while(true){
//     memoriaLivre = os.freemem() /1024 /1024 /1024
//     console.log("GB disponiveis: " + memoriaLivre.toFixed(2) )
// }