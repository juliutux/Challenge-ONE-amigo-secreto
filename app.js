//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo(){
    let nome = document.querySelector('input').value;

    if (nome === ""){
        alert('Por favor, insira um nome!');
    }else{
        amigos.push(nome);
        limparCampo();
        atualizarListaAmigos();
    }
}

function limparCampo(){
    let nome = document.querySelector('input');
    nome.value = '';
}

function atualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    for(let i = 0; i < amigos.length; i++){
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigos.length === 0){
        document.getElementById("resultado").innerHTML = "A lista de amigos está fazia!";
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    let amigoSorteado = amigos[indiceAleatorio];

    document.getElementById("resultado").innerHTML = `O amigo sorteado é: ${amigoSorteado}`;
}