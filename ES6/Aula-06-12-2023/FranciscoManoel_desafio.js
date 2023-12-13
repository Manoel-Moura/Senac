const os = require('os') // Importando o módulo 'os' que fornece métodos e propriedades relacionados ao sistema operacional
// Mostra no terminal 

const cpu = os.cpus()
cpu.forEach(element => {
    console.log(`Indice: ${element.cpus().times.idle}\nModelo: ${element.cpus().model}\nVelocidade: ${element.cpus().speed}\nUsuario: ${element.cpus().times.user}\n\n`)
    
});

