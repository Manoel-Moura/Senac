let container = document.getElementById("container");


let fragment = document.createDocumentFragment();

let card = document.createElement('div');

card.setAttribute('class','card');

let div_img = document.createElement('div');

div_img.setAttribute('class','div_img');
div_img.style.backgroundImage = "url('receita.jpg')"



card.append(div_img);

let div_chef = document.createElement('div')
div_chef.setAttribute('class', 'chef-avatar')
div_chef.style.backgroundImage = "url('jackin.jpeg')"

card.append(div_chef);

let bnt_receita = document.createElement('button')
bnt_receita.setAttribute('class','btn-receita')
bnt_receita.textContent = "Nome da Receita"

card.append(bnt_receita)

let lb_chef = document.createElement('label')
lb_chef.setAttribute('class','lb-chef')
lb_chef.textContent = "Manoel Moura"

card.append(lb_chef)

let lb_avaliacao = document.createElement('label')
lb_avaliacao.setAttribute('class', 'lb-avaliacao')
lb_avaliacao.textContent = '❤ 1.511'

card.append(lb_avaliacao)


fragment.append(card);

container.append(card)









/*
let texto = "Indice : "

for (let i = 1; i <= 500; i++) {
   let card = `<div class="card">
                    <div class="top">
                    
                    ${texto + i}
                    </div>
                    <div class="bottom">

                    </div>
                    </div>`

container.innerHTML += card // innerHTML tem falha de segurança e é muito mais lento!!!
}
*/

