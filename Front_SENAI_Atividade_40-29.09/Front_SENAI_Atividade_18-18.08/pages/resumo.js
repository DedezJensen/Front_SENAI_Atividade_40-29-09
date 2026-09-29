const id = new URLSearchParams(location.search).get('id');
const produto = PRODUTOS.find((p) => p.id === id);

const resumo = document.getElementById('resumo');
const erro = document.getElementById('erro');

if (!produto) {
    resumo.hidden = true;
    erro.hidden = false;
} else {
    const campo = document.getElementById('quantidade');
    const total = document.getElementById('valorTotal');

    const img = document.getElementById('imgProduto');
    img.src = '../' + produto.imagem;
    img.alt = produto.nome;

    document.title = produto.nome + ' | Resumo da compra';
    document.getElementById('nomeProduto').textContent = produto.nome;
    document.getElementById('precoUnitario').textContent = formatarMoeda(produto.preco);

    function atualizar() {
        const qtd = Math.min(10, Math.max(1, parseInt(campo.value, 10) || 1));
        total.textContent = formatarMoeda(produto.preco * qtd);
        return qtd;
    }

    campo.addEventListener('input', atualizar);
    campo.addEventListener('change', () => { campo.value = atualizar(); });
    atualizar();
}
