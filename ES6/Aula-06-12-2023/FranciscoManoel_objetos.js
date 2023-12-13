const alunos = [
    {
        nome: 'Alice',
        idade: 25,
        curso: 'Engenharia'
    },
    {
        nome: 'Bob',
        idade: 30,
        curso: 'Ciência da Computação'
    },
    {
        nome: 'Carlos',
        idade: 22,
        curso: 'Arquitetura'
    }
];

alunos[0].nome = 'Manoel'
alunos[0].idade = 23
alunos[0].curso= 'Ciência da Computação'

alunos[1].nome = 'Carlos Alexandre'
alunos[1].idade = 21
alunos[1].curso= 'Programação '

alunos[2].nome = 'Finn'
alunos[2].idade = 13
alunos[2].curso= 'Heroi'

alunos[0].anoInicio = 2019
alunos[0].modulo = 8

alunos[1].anoInicio = 2023
alunos[1].modulo = 4

alunos[2].anoInicio = 2010
alunos[2].modulo = 2

alunos.forEach(listarAlunos => console.log(`
Nome: ${listarAlunos.nome}
Idade: ${listarAlunos.idade}
Curso: ${listarAlunos.curso}
AnoInicio: ${listarAlunos.anoInicio}
Modulo: ${listarAlunos.modulo}`))

// const os = require('os') // Importando o módulo 'os' que fornece métodos e propriedades relacionados ao sistema operacional

// function atualiza() { // Função que mostra no terminal os dados da CPU
//     return console.table(`Indice: ${os.cpus()[0].times.idle}\nModelo: ${os.cpus()[0].model}\nVelocidade: ${os.cpus()[0].speed}\nUsuario: ${os.cpus()[0].times.user}\n\n`)
// }

// setInterval(atualiza, 2000) // Execulta a função atuaiza a cada 2 segundos;