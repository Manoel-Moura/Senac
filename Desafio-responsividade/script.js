
// // Obtendo a referência do elemento com o ID "topo" no HTML
// let container = document.getElementById("topo");

// // Criando um fragmento de documento para otimizar a manipulação do DOM
// let fragment = document.createDocumentFragment();

// // Criando o elemento <div> para a TopBar
// let topBar = document.createElement("div");
// topBar.setAttribute("class", "topo");

// // Criando a div para a logo
// let divLogo = document.createElement("div");
// divLogo.setAttribute("class", "divLogo");

// //============================================================
// // Criando a imagem do topo com o Link para a página do Senac
// let a_logo = document.createElement("a");
// a_logo.setAttribute("class", "logo");
// a_logo.setAttribute("href", "https://www.senac.br/");

// let img_logo = document.createElement("img");
// img_logo.setAttribute("src", "../src/media/images/senac_logo.svg.png");
// img_logo.setAttribute("class", "logo");

// a_logo.append(img_logo);

// //================================================================================================
// // Criando uma div com todos os botões do Menu já configurados
// let botoes_menu = ["O Senac", "Início", "Chefes", "Sobre", "Login"];
// const paginas_menu = [
//   "https://www.senac.br/",
//   "../pages/camila.html",
//   "Chefes.html",
//   "../pages/gabriel.html",
//   "../pages/manoel.html",
// ];

// let tam = botoes_menu.length;

// let div_botoes = document.createElement("div"); // Div para receber os botões

// div_botoes.setAttribute("class", "menubutton");

// for (let i = 0; i < tam; i++) {
//   let pagina = `${paginas_menu[i]}`;

//   let botao = document.createElement("a");
//   botao.setAttribute("href", pagina);
//   // botao.setAttribute("target", "_blank");

//   let button = document.createElement("button");
//   button.append(botoes_menu[i]);
//   button.setAttribute("class", "botao");

//   botao.append(button);
//   div_botoes.append(botao);
// }
// //================================================================================================
// // Criando uma div com todos os contatos do Senac configurados
// let img_contato = [
//   "../src/media/images/facebook.png",
//   "../src/media/images/instagram.png",
//   "../src/media/images/twitter.png",
//   "../src/media/images/linkedin.svg",
//   "../src/media/images/youtube.png",
// ];
// let class_css = ["face", "instagram", "twitter", "linkedin", "youtube"];
// const link_contato = [
//   "https://www.facebook.com/SenacBrasil",
//   "https://www.instagram.com/senacbrasil/",
//   "https://twitter.com/SenacBrasil",
//   "https://www.linkedin.com/uas/login?session_redirect=%2Fcompany%2F2655383",
//   "https://www.youtube.com/user/SenacNacional",
// ];

// // Criando a div para os contatos
// let contatos = document.createElement("div");
// contatos.setAttribute("class", "contatos");

// let tam_contato = img_contato.length;

// for (let i = 0; i < tam_contato; i++) {
//   let cla = `${class_css[i]}`;

//   let link_social = `${link_contato[i]}`;
//   let img_rede = `${img_contato[i]}`;

//   let rede = document.createElement("a");
//   rede.setAttribute("href", link_social);
//   rede.setAttribute("target", "_blank");

//   let btn_rede = document.createElement("button");
//   btn_rede.setAttribute("class", "btn-social");

//   let img_social = document.createElement("img");
//   img_social.setAttribute("class", cla);
//   img_social.setAttribute("src", img_rede);

//   btn_rede.append(img_social);
//   rede.append(btn_rede);
//   contatos.append(rede);
// }

// // Adicionando a logo à TopBar
// topBar.append(a_logo);
// // Adicionando os botões do menu à TopBar
// topBar.append(div_botoes);
// // Adicionando os contatos à TopBar
// topBar.append(contatos);

// // Adicionando a TopBar ao fragmento de documento
// fragment.append(topBar);
// // Adicionando o fragmento de documento à div com o ID "topo" no HTML
// container.append(fragment);

//==========================================================================================================
// Tela responsivel 

// Obtendo a referência do elemento com o ID "topo" no HTML
let menu_mobile = document.getElementById("topo2");

var windowWidth = window.innerWidth;

// Criando um fragmento de documento para otimizar a manipulação do DOM
let fragment_menu_mobile = document.createDocumentFragment();

let menu = document.createElement('div')
menu.setAttribute('class','menu-mobile')

let divLogo = document.createElement("div");
divLogo.setAttribute("class", "divLogo");

// Criando a imagem do topo com o Link para a página do Senac
let a_logo_response = document.createElement("a");
a_logo_response.setAttribute("class", "logo");
a_logo_response.setAttribute("href", "https://www.senac.br/");

let img_logo_response = document.createElement("img");
img_logo_response.setAttribute("src", "../SiteInicial/images/Senac_logo.jpg");
img_logo_response.setAttribute("class", "logo");

a_logo_response.append(img_logo_response);

menu.append(a_logo_response)

let button_menu = document.createElement('button')
button_menu.setAttribute('id','bt-menu-response')

menu.append(button_menu)




fragment_menu_mobile.append(menu)
menu_mobile.append(fragment_menu_mobile)