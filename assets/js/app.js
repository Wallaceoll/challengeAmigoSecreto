let amigos = [];

function adicionarAmigo() {
    let inputNome = document.getElementById("amigo");
    let nome = inputNome.value.trim();
    
    if (nome === "") {
        alert("Por favor, insira um nome válido!");
        return;
    }
    
    amigos.push(nome);
    atualizarLista();
    inputNome.value = "";
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(nome => {
        let li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista está vazia! Adicione nomes antes de sortear.");
        return;
    }
    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>Amigo sorteado: <strong>${sorteado}</strong></li>`;
    resultado.style.color = "#05DF05";
}