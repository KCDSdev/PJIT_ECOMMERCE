// Adicionando a lógica para lidar com o envio do formulário de cadastro
document.getElementById('form-cadastro').onsubmit = function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Coletando os valores dos campos do formulário com prefixo "Cliente"
    const ClienteNome = document.getElementById('nome').value;
    const ClienteTelefone = document.getElementById('telefone').value;
    const ClienteCelular = document.getElementById('celular').value;
    const ClienteEmail = document.getElementById('email').value;
    const ClienteSenha = document.getElementById('senha').value;
    const ClienteLogradouro = document.getElementById('logradouro').value;
    const ClienteNumero = document.getElementById('numero').value;
    const ClienteMunicipio = document.getElementById('municipio').value;
    const ClienteCidade = document.getElementById('cidade').value;
    const ClienteEstado = document.getElementById('estado').value;
    const ClienteSexo = document.getElementById('sexo').value; // Coletando o sexo
    const ClienteCpf = document.getElementById('cpf').value; // Coletando o CPF
    const ClienteDataNascimento = document.getElementById('dataNascimento').value; // Coletando a data de nascimento
    const ClienteRg = document.getElementById('rg').value; // Coletando o RG
    const ClienteNacionalidade = document.getElementById('nacionalidade').value; // Coletando a nacionalidade
    const ClienteEstadoCivil = document.getElementById('estadoCivil').value; // Coletando o estado civil

    // Enviando os dados do cadastro para o servidor
    fetch('http://localhost:3000/api/cliente/adicionarCliente', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ClienteNome,
            ClienteTelefone,
            ClienteCelular,
            ClienteEmail,
            ClienteSenha,
            ClienteLogradouro,
            ClienteNumero,
            ClienteMunicipio,
            ClienteCidade,
            ClienteEstado,
            ClienteSexo,
            ClienteCpf,
            ClienteDataNascimento,
            ClienteRg,
            ClienteNacionalidade,
            ClienteEstadoCivil,
            ClienteAtivo: true // Definido como ativo por padrão
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao cadastrar cliente');
            }
            return response.json();
        })
        .then(data => {
            alert(data.message); // Mostra mensagem de sucesso ou erro
            hideCadastroForm(); // Esconde o formulário após o envio
        })
        .catch(error => {
            console.error('Erro:', error);
            alert('Erro ao cadastrar cliente.'); // Mensagem de erro
        });
}

function showCadastroForm() {
    document.getElementById('cadastro-form').style.display = 'block'; // Exibe o formulário de cadastro
    hideLoginForm(); // Esconde o formulário de login
    document.getElementById('veiculos-container').style.display = 'none'; // Oculta o contêiner de veículos
}

function hideCadastroForm() {
    document.getElementById('cadastro-form').style.display = 'none'; // Oculta o formulário de cadastro
    document.getElementById('veiculos-container').style.display = 'flex'; // Exibe o contêiner de veículos
    location.reload(); // Recarrega a página
}
