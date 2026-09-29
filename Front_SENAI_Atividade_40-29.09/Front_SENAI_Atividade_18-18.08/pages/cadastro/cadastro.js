const valor = (id) => document.getElementById(id).value.trim();

document.getElementById('formCadastro').addEventListener('submit', (event) => {
    event.preventDefault();

    const senha = document.getElementById('inputSenha').value;
    if (senha !== document.getElementById('inputConfirmar').value) {
        alert('As senhas não conferem.');
        return;
    }

    // Lista de usuários já cadastrados (array vazio se não houver nenhum)
    const usuarios = JSON.parse(localStorage.getItem('usuario') || '[]');

    if (usuarios.some((u) => u.email === valor('inputEmail'))) {
        alert('Este e-mail já está cadastrado.');
        return;
    }

    usuarios.push({
        nome: valor('inputNome'),
        email: valor('inputEmail'),
        senha: senha,
        RG: valor('inputRG'),
        CPF: valor('inputCPF'),
        endereco: valor('inputEndereco'),
        CEP: valor('inputCEP'),
        cidade: valor('inputCidade'),
        estado: valor('inputEstado'),
        pais: valor('inputPais'),
        dataNascimento: valor('inputDataNascimento')
    });

    localStorage.setItem('usuario', JSON.stringify(usuarios));
    alert('Cadastro realizado com sucesso!');
    window.location.href = '../login/login.html';
});
