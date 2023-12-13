console.log("Olá mundo")

class Pessoa {
    digaOlá() {
        console.log("Oiiii")
    }
}

const botaoJs = document.createElement('button')
botaoJs.innerText = 'Botão JS'



const divJs = document.createElement('div')
divJs.setAttribute("id", "divJs")

const paragrafoJS = document.createElement('p')
paragrafoJS.innerText = 'Francisco Manoel Portela Moura Alves de Carvalho'

document.body.append(botaoJs)
document.body.append(divJs)
document.body.append(paragrafoJS)

setTimeout(() => {
    location.reload();
}, 2000)