



let amigo = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById('amigo')
    let nombreAmigo = inputAmigo.value;

    if (!nombreAmigo) {
        alert('debes agregar un nombre');
        return;
    }
    amigo.push(nombreAmigo);
    inputAmigo.value = '';
    inputAmigo.focus();
    renderisarAmigos();

}

function renderisarAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    
    for (let i = 0; i < amigo.length; i++) {
        let item = document.createElement('li');
        item.textContent = amigo[i];
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigo.length == 0) {
        alert('no hay amigos que sortear');
        return                
    }
    
    let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `El amigo sorteado es ${amigoSorteado}`;

    let limpiarLista = document.getElementById('listaAmigos');
    limpiarLista.innerHTML = '';

}