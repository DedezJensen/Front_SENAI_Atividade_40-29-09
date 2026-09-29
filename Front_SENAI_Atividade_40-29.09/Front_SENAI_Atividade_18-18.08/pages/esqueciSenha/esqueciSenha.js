document.getElementById('formEsqueciSenha').addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Senha recuperada com sucesso!');
    window.location.href = '../login/login.html';
});
