function showLoginForm() {
    document.getElementById('login-form').style.display = 'block';
}

function hideLoginForm() {
    document.getElementById('login-form').style.display = 'none';
}

function login() {
    const email = document.getElementById('Email').value; // Corrigi para 'Email' (de acordo com o ID do input)
    const password = document.getElementById('password').value;

    // Faz a requisição para autenticar o usuário
    fetch('http://localhost:3000/api/cliente/autenticar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, senha: password }) // Usando 'senha' para se alinhar com o backend
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao autenticar');
        }
        return response.json();
    })
    .then(data => {
        // Armazenar o nome do usuário em uma variável ou no local storage
        const usuarioNome = data.ClienteNome; // Assumindo que o retorno da API contém o nome do cliente
        document.getElementById('username-display').innerText = usuarioNome; // Atualiza o nome do usuário na interface
        document.getElementById('user-info').style.display = 'flex'; // Mostra o ícone e nome do usuário
        document.getElementById('login-form').style.display = 'none'; // Esconde o formulário de login
    })
    .catch(error => {
        console.error('Erro:', error);
    });
}

function logout() {
    // Aqui você pode implementar a lógica para fazer logout, se necessário (ex: limpar o local storage)
    document.getElementById('user-info').style.display = 'none'; // Esconde o ícone e nome do usuário
    document.getElementById('login-form').style.display = 'none'; // Esconde o formulário de login
    alert('Você saiu com sucesso!'); // Mensagem de logout
}