//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo(nome){
    let nome = document.querySelector('input').value;

    if (nome == ''){
        alert('Por favor, insira um nome!');
    }else{
        amigos.push(nome);
        limparCampo();
    }
}

function limparCampo(){
    nome = document.querySelector('input');
    nome.value = '';
}

function atualizarListaAmigos() {
    const lista = document.querySelector('listaAmigos');
    lista.innerHTML = "";

    for(let i = 0; i < amigos.legth; i++){
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}