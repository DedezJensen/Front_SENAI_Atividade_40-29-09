const lista = document.getElementById('listaProdutos');

lista.innerHTML = PRODUTOS.map((p) => `
    <article class="card">
        <img src="${p.imagem}" alt="${p.nome}">
        <h3>${p.nome}</h3>
        <p class="desc">${p.descricao}</p>
        <p class="preco">${formatarMoeda(p.preco)}</p>
        <small>ou 12x de ${formatarMoeda(p.preco / 12)}</small>
        <a class="botao" href="pages/resumo.html?id=${p.id}">Comprar</a>
    </article>
`).join('');
