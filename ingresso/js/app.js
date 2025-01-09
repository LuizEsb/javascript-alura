function comprar() {
    let ingressoEscolhido = document.getElementById('tipo-ingresso');
    let qtdeCompra = parseInt(document.getElementById('qtd').value);

    if (ingressoEscolhido.value == 'inferior') {
        comprarInferior(qtdeCompra);
    }
    else if (ingressoEscolhido.value == 'superior') {
        comprarSuperior(qtdeCompra);
    }
    else if (ingressoEscolhido.value == 'pista') {
        comprarPista(qtdeCompra);
    }
}

function comprarInferior(qtdeCompra) {
    let ingDispInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtdeCompra > ingDispInferior) {
        alert('Quantidade de ingressos indisponível.')
    } else {
        ingDispInferior = ingDispInferior - qtdeCompra;
        document.getElementById('qtd-inferior').textContent = ingDispInferior;
        alert('Compra realizada com sucesso!');
    }
}
function comprarSuperior(qtdeCompra) {
    let ingDispSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtdeCompra > ingDispSuperior) {
        alert('Quantidade de ingressos indisponível.')
    } else {
        ingDispSuperior = ingDispSuperior - qtdeCompra;
        document.getElementById('qtd-superior').textContent = ingDispSuperior;
        alert('Compra realizada com sucesso!');
    }
}
function comprarPista(qtdeCompra) {
    let ingDispPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtdeCompra > ingDispPista) {
        alert('Quantidade de ingressos indisponível.')
    } else {
        ingDispPista = ingDispPista - qtdeCompra;
        document.getElementById('qtd-pista').textContent = ingDispPista;
        alert('Compra realizada com sucesso!');
    }
}