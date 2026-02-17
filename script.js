/*Crie uma simples aplicação onde: 
um botão altera a cor de fundo da tela ao ser clicado para verde.
um botão altera a cor de fundo da tela ao ser clicado para vermelho.
Um botão para retornar a cor original da tela ao ser clicado.
um botão para apresentar uma mensagem: "Olá, seja bem-vindo ao meu app da aula 01 Introdução ao JavaScript";*/

const btnVerde = document.getElementById("btnVerde");
const btnVermelho = document.getElementById("btnVermelho");
const btnRetorna = document.getElementById("btnRetorna");
const btnMensagem = document.getElementById("btnMensagem");
const mensagem = document.getElementById("mensagem");

btnVerde.addEventListener("click", function() {
    document.body.style.backgroundColor = "rgb(20, 163, 20)";
});

btnVermelho.addEventListener("click", function() {
    document.body.style.backgroundColor = "rgb(209, 13, 33)"
});

btnRetorna.addEventListener("click", function() {
    document.body.style.backgroundColor = "rgb(208, 206, 206)";
});

btnMensagem.addEventListener("click", function() {
    mensagem.innerText = 
        "Olá, seja bem-vindo ao meu app da aula 01 Introdução ao JavaScript";
});
