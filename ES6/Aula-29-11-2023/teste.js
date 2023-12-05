
// /**  Possiveis erros que podem aconterce
//     console.log("50" + 10) // 5010
//     console.log("50" - 10) // 40
//     console.log("OI" + 10) // Nah
//     console.log(Number("50") + 10) // 60
//     console.log("50" + String(10)) // 5010
// */

// var a = 50
// var b = '50'

// // console.log(typeof a)
// // console.log(typeof b)

// console.log(a == b)
// console.log(a === b)

// console.log(a && b)

// console.log(a || b)


const { randomBytes } = require('crypto')
const readline = require('readline')

const rl = readline.Interface({
    input: process.stdin,
    output: process.stdout
})

function matematica(){
    return Math.floor(Math.random() * 11)
}


rl.question("Me dê uma nota ", nota1 => {
    rl.question("Me dê outra nota ", nota2 => {
        let media = (parseFloat(nota1) + parseFloat(nota2)) / 2
        let soma = (parseFloat(nota1) + parseFloat(nota2))
        let subtracao = (parseFloat(nota1) - parseFloat(nota2)) 
        let divisao = (parseFloat(nota1) / parseFloat(nota2)) 
        let multiplicaao = (parseFloat(nota1) * parseFloat(nota2))

        let respostaMedia = "Sua Média é igual a: " + media
        let respostaSoma = "Sua Soma é igual a: " + soma
        let respostaSubtracao = "Sua Subtracao é igual a: " + subtracao
        let respostaDivisao = "Sua Divisão é igual a: " + divisao
        let respostaMultiplicacao = "Sua Multiplicação é igual a: " + multiplicaao

      
        console.log(respostaSoma)
        console.log(respostaSubtracao)
        console.log(respostaDivisao)
        console.log(respostaMultiplicacao)
        console.log(respostaMedia)
        
        randomNota =  matematica()

        
            // console.log("Esperava que me desse um ", randomNota + " mas fico feliz com sua media ", media  )

        //    if(media > randomNota){
        //     console.log("Esperava que me desse um " + randomNota + " mas fico feliz com sua media ", media )
        //    }else{
        //     console.log("Esperava que me desse um " + randomNota + ", não gostei da media ", media + " que me deu!!")
        //    }

        console.log(media == randomNota  "Media: ", media , "\nNota: ", randomNota)
        console.log(media == randomNota || "Media: ", media , "\nNota: ", randomNota)
            
            rl.close()
    })
        
})