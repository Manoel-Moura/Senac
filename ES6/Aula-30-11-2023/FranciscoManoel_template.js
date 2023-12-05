let idade = 23
let nome = 'Manoel Moura'

console.log(`Meu nome é ${nome}`)

console.log(`Sou muito bonito\nTenho ${idade} anos`)


function criaMensagem() {

    if (idade >= 18) {
        console.log(`Logo, tenho idade para beber!`)
    } else {
        console.log(`Logo, não tenho idade para beber!`)
    }
}

criaMensagem()

const a = 'String de exemplo global'
const b = 'String de exemplo global 2'
const c = 'String de exemplo global 3'

console.log(`
    ${a}
    ${b}
    ${c}
`)

function criaMensagemNovamente() {

    const a = 'String de exemplo local'
    const b = 'String de exemplo local 2'
    const c = 'String de exemplo local 3'

    console.log(`
    ${a}
    ${b}
    ${c}
`)
}

criaMensagemNovamente()