class Cliente {
    constructor({
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
        ClienteAtivo = true
    }) {
        this.ClienteNome = ClienteNome;
        this.ClienteTelefone = ClienteTelefone;
        this.ClienteCelular = ClienteCelular;
        this.ClienteEmail = ClienteEmail;
        this.ClienteSenha = ClienteSenha;
        this.ClienteLogradouro = ClienteLogradouro;
        this.ClienteNumero = ClienteNumero;
        this.ClienteMunicipio = ClienteMunicipio;
        this.ClienteCidade = ClienteCidade;
        this.ClienteEstado = ClienteEstado;
        this.ClienteSexo = ClienteSexo;
        this.ClienteCpf = ClienteCpf;
        this.ClienteDataNascimento = ClienteDataNascimento;
        this.ClienteRg = ClienteRg;
        this.ClienteNacionalidade = ClienteNacionalidade;
        this.ClienteEstadoCivil = ClienteEstadoCivil;
        this.ClienteAtivo = ClienteAtivo;
    }

    // Método opcional para exibir informações sobre o cliente
    mostrarInformacoes() {
        console.log(`Nome: ${this.ClienteNome}, CPF: ${this.ClienteCpf}, Email: ${this.ClienteEmail}`);
    }
}

module.exports = Cliente;
