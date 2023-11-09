let teste = document.getElementById("teste");

teste.textContent = "Meu texto";
let a = 10;
let b = 52;

let garrafa = { //JSON
    altura: "20cm",
    diametro: "5cm",
    capacidade: "500ml",
    cor: "cinza-escuro"
}

function alterarTexto(){
 
    teste.textContent = garrafa.capacidade;
}