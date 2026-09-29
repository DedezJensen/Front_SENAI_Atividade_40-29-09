// Valida o login comparando com os usuários salvos na página de cadastro (localStorage)
document.getElementById('formLogin').addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.getElementById('inputEmail').value.trim();
    const senha = document.getElementById('inputSenha').value;

    const usuarios = JSON.parse(localStorage.getItem('usuario') || '[]');
    const usuario = usuarios.find((u) => u.email === email && u.senha === senha);

    if (usuario) {
        window.location.href = '../../index.html';
    } else {
        alert('E-mail ou senha incorretos');
    }
});
