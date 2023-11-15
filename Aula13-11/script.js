let container = document.getElementById("container");


let fragment = document.createDocumentFragment();

let card = document.createElement('div');

card.setAttribute('class','card');

let div_img = document.createElement('div');

div_img.setAttribute('class','div_img');

card.append(div_img);

let div_chef = document.createElement('div')
div_chef.setAttribute('class', 'chef-avatar')

card.append(div_chef);

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

