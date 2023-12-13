class motocicleta {
    constructor(marca, modelo, ano_fabricacao) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano_fabricacao = ano_fabricacao;
    }

    acelerar() {
        console.log('Vruuuuuum')
    }

    frear() {
        console.log('iiiiiiiiiiiiiiiiiiiiiiH')
    }
    abastecer() {
        console.log('completa o tanque...')
    }
}

const pop = new motocicleta('Honda', 'pop100', 2023)
const bros = new motocicleta('Honda', 'bros', 2024)
const CG = new motocicleta()

CG.abastecer()
pop.acelerar()
CG.frear()
