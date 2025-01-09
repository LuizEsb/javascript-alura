let totalGeral
limpar()

function adicionar() {
    let produtoSelecionado = document.getElementById('produto').value;
    let quantidadeProduto = document.getElementById('quantidade').value;
    if (quantidadeProduto == 0) {
        alert('Digite a quantidade de produtos a ser adicionada ao carrinho!')
        return
    }
    let nomeProduto = produtoSelecionado.split('-')[0];
    let valorUnitário = produtoSelecionado.split('R$')[1];
    let preco = quantidadeProduto * valorUnitário;
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidadeProduto}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>`;

    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 0;

}

function limpar(params) {
    totalGeral = 0
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$0,00';
}