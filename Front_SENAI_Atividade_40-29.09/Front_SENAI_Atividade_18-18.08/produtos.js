const PRODUTOS = [
    { id: 'iphone', nome: 'iPhone', preco: 7999, imagem: 'assets/iphone17.jpg', descricao: 'Elegante, premium e reconhecido pelo design sofisticado e pelo ecossistema integrado' },
    { id: 'samsung', nome: 'Samsung', preco: 6999, imagem: 'assets/SamsungUm.png', descricao: 'Versátil e inovador, com opções que vão do intermediário ao topo de linha.' },
    { id: 'motorola', nome: 'Motorola', preco: 4999, imagem: 'assets/motorola_jpg.png', descricao: 'Conhecida pelo bom custo-benefício, praticidade e experiência Android próxima do puro.' },
    { id: 'xiaomi', nome: 'Xiaomi', preco: 4499, imagem: 'assets/xiaomiUm.png', descricao: 'Oferece tecnologia avançada e ótimas especificações por preços competitivos.' },
    { id: 'oppo', nome: 'Oppo', preco: 4299, imagem: 'assets/Oppo_jpg.png', descricao: 'Combina design refinado, câmeras avançadas e carregamento rápido.' },
    { id: 'realme', nome: 'Realme', preco: 3499, imagem: 'assets/realme_jpg.png', descricao: 'Destaca-se pelo desempenho forte e excelente custo-benefício.' },
    { id: 'huawei', nome: 'Huawei', preco: 3999, imagem: 'assets/Huawei.png', descricao: 'Focada em inovação, câmeras de alta qualidade e acabamento premium.' },
    { id: 'asus', nome: 'Asus', preco: 5999, imagem: 'assets/Asus.png', descricao: 'Conhecida por smartphones potentes, especialmente voltados para desempenho e gaming.' },
    { id: 'infinix', nome: 'Infinix', preco: 2999, imagem: 'assets/Infinix_.png', descricao: 'Design moderno com acabamento dourado, ótima bateria e preço acessível.' }
];

function formatarMoeda(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}
