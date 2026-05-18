//Import do arquivo de personagens local
//import { universe } from "./module/stevenUniverseAPI.js";

function criarCards(universe) {

    //console.log(universe[0].personagens[0].name)

    //Recebe a div principal onde serão criados os cards de personagens
    let divPrincipal = document.getElementById('cardProdutos');

    //Estrutura de repetição para carregar os livros do array de personagens
    universe.personagens.forEach(function(stUniverse){

        //Criar elementos no HTML
        let divCaixaProduto     = document.createElement('div');
        let aCaixaUrl           = document.createElement('a');
        let h2CaixaTitulo       = document.createElement('h2');
        let figureCaixaImagem   = document.createElement('figure');
        let imagem              = document.createElement('img');
        let h3CaixaYears        = document.createElement('h3');
        let divCaixaTexto       = document.createElement('div');
        let pCaixaGun           = document.createElement('p');

        //Definir atributos dos elementos HTML
        aCaixaUrl.setAttribute('href', stUniverse.url );
        aCaixaUrl.setAttribute('target', '_blank');
        aCaixaUrl.setAttribute('class', 'caixa_url');

        divCaixaProduto.setAttribute('class', 'caixa_produto');
        h2CaixaTitulo.setAttribute('class', 'caixa_titulo');
        figureCaixaImagem.setAttribute('class', 'caixa_imagem');
        imagem.setAttribute('src', stUniverse.image);
        h3CaixaYears.setAttribute('class', 'caixa_years');
        divCaixaTexto.setAttribute('class', 'caixa_texto');
        pCaixaGun.setAttribute('class', 'caixa_gun');


        //Atribuindo conteúdo nos elementos de texto
        //aCaixaUrl.innerText     = stUniverse.url;
        h2CaixaTitulo.innerText = stUniverse.name;
        h3CaixaYears.innerText  = `Idade: ${stUniverse.years}`;
        divCaixaTexto.innerText = stUniverse.describle;
        pCaixaGun.innerText     = `Arma: ${stUniverse.gun}`;

        //Associar elementos dentro de elementos (Pai Filho)
        divCaixaProduto.appendChild(h2CaixaTitulo);
        divCaixaProduto.appendChild(figureCaixaImagem);
        divCaixaProduto.appendChild(h3CaixaYears);
        figureCaixaImagem.appendChild(imagem);
        divCaixaProduto.appendChild(divCaixaTexto);
        divCaixaProduto.appendChild(pCaixaGun);
        
        aCaixaUrl.appendChild(divCaixaProduto);

        divPrincipal.appendChild(aCaixaUrl);

    });
};

//Consumir dados de uma API de personagens
async function carregarStevenUniverseAPI() {
    let url = 'https://raw.githubusercontent.com/Sinki27/Api_StevenUniverse/refs/heads/main/stevenUniverseAPI.json';

    //Para garantir a respota da API deve se usar o await e o Async.
    let resposta = await fetch(url);

    //Recebe so dados em formato json da API
    let dados = await resposta.json();

    //Chama a função para carregar os cards e encaminha dos recebidos da API
    criarCards(dados);
};


window.addEventListener('load', function(){
    //criarCards(universe);
    carregarStevenUniverseAPI();
});