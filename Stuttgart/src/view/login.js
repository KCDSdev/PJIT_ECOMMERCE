function showLoginForm() {
    document.getElementById('login-form').style.display = 'block';
}

function hideLoginForm() {
    document.getElementById('login-form').style.display = 'none';
}

function login() {

    const email = document.getElementById('Email').value; // Correto de acordo com o ID do input
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
            // Armazenar o nome do usuário em localStorage
            const usuarioNome = data.ClienteNome; // Supondo que o retorno da API contém o nome do cliente
            localStorage.setItem('usuarioNome', usuarioNome); // Armazenar o nome no localStorage

            // Atualiza o nome do usuário na interface
            document.getElementById('username-display').innerText = usuarioNome;
            document.getElementById('user-info').style.display = 'flex'; // Mostra o ícone e nome do usuário
            document.getElementById('login-form').style.display = 'none'; // Esconde o formulário de login
        })
        .catch(error => {
            console.error('Erro:', error);
        });
    document.getElementById('Sair').style.display = 'flex';
}

// Função para mostrar o usuário logado ao carregar a página
function verificarUsuarioLogado() {
    const usuarioNome = localStorage.getItem('usuarioNome');
    if (usuarioNome) {
        document.getElementById('username-display').innerText = usuarioNome; // Atualiza o nome do usuário na interface
        document.getElementById('user-info').style.display = 'flex'; // Mostra o ícone e nome do usuário
    }
}

// Função para sair do sistema
function logout() {
    localStorage.removeItem('usuarioNome'); // Limpa o nome do usuário do localStorage
    document.getElementById('user-info').style.display = 'none'; // Esconde o ícone e nome do usuário
    document.getElementById('login-form').style.display = 'none'; // Esconde o formulário de login
}

function showLoginForm() {
    document.getElementById('login-form').style.display = 'block'; // Exibe o formulário de login
    document.getElementById('cadastro-form').style.display = 'none'; // Esconde o formulário de cadastro
    document.getElementById('veiculos-container').style.display = 'flex'; // Exibe o contêiner de veículos
    document.getElementById('Sair').style.display = 'none';

}

function hideLoginForm() {
    document.getElementById('login-form').style.display = 'none'; // Esconde o formulário de login
}






// Função para verificar se o usuário está logado
function verificarLogin() {
    const usuarioNome = localStorage.getItem('usuarioNome');

    if (!usuarioNome) { // Se o usuário não estiver logado
        document.getElementById('login-form').style.display = 'block'; // Exibe o formulário de login
        document.getElementById('veiculos-container').style.display = 'none'; // Oculta o conteúdo principal
    } else {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('veiculos-container').style.display = 'block';
        document.getElementById('username-display').innerText = usuarioNome;
    }
}



// Chama as funções ao carregar a página
window.onload = function () {
    verificarUsuarioLogado();
    buscarVeiculos(); // Certifique-se de que a função buscarVeiculos está definida
    window.onload = verificarLogin;
};
