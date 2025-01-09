let amigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');

    if (amigo.value == '') {
        alert('Você deve escrever um nome!');
        return;
    }

    if (amigos.includes(amigo.value)) {
        alert('Nome já adicionado!');
        return;
    }

    amigos.push(amigo.value);
    if (lista.textContent == '') {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }
    amigo.value = '';
}
function sortear() {
    if (amigos.length < 2) {
        alert('Você precisa de mais que uma pessoa para sortear!');
        return;
    }

    embaralha(amigos);
    let Sorteio = document.getElementById('lista-sorteio');
    Sorteio.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {

        if (i == amigos.length - 1) {
            Sorteio.innerHTML = Sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';
        } else {
            Sorteio.innerHTML = Sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
        }
    }
}
function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] =
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}
function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}