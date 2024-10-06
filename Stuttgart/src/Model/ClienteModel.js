class Cliente {
    constructor(nome, telefone, celular, email, senha, logradouro, numero, municipio, cidade, estado, dataCriacao = new Date(), status = 'ativo', tipo) {
        this.nome = nome; // Nome do cliente
        this.telefone = telefone; // Telefone do cliente (opcional)
        this.celular = celular; // Celular do cliente (opcional)
        this.email = email; // Email do cliente
        this.senha = senha; // Senha do cliente
        this.logradouro = logradouro; // Logradouro do endereço
        this.numero = numero; // Número do endereço
        this.municipio = municipio; // Município do endereço
        this.cidade = cidade; // Cidade do endereço
        this.estado = estado; // Estado do endereço
        this.dataCriacao = dataCriacao; // Data de criação do cliente
        this.status = status; // Status do cliente (ativo, inativo)
        this.tipo = tipo; // Tipo de cliente ('F' para Pessoa Física ou 'J' para Pessoa Jurídica)
    }
}

class PessoaFisica extends Cliente {
    constructor(nome, telefone, celular, email, senha, logradouro, numero, municipio, cidade, estado, sexo, cpf, dataNascimento, rg, nacionalidade, estadoCivil) {
        super(nome, telefone, celular, email, senha, logradouro, numero, municipio, cidade, estado, undefined, 'ativo', 'F'); // Chama o construtor da classe pai
        this.sexo = sexo; // Sexo do cliente (apenas para Pessoa Física)
        this.cpf = cpf; // CPF do cliente
        this.dataNascimento = dataNascimento; // Data de nascimento do cliente
        this.rg = rg; // Registro Geral do cliente (documento de identidade)
        this.nacionalidade = nacionalidade; // Nacionalidade do cliente
        this.estadoCivil = estadoCivil; // Estado civil do cliente
    }

    // Valida os campos da Pessoa Física
    validarCampos() {
        if (!this.validarTelefone(this.telefone)) {
            throw new Error('Telefone inválido.');
        }
        if (!this.validarCelular(this.celular)) {
            throw new Error('Celular inválido.');
        }
        if (!this.validarEmail(this.email)) {
            throw new Error('Email inválido.');
        }
        if (!this.validarSenha(this.senha)) {
            throw new Error('Senha inválida. Deve ter pelo menos 8 caracteres, incluindo letras e números.');
        }
        if (!this.validarCPF(this.cpf)) {
            throw new Error('CPF inválido.');
        }
    }

    validarTelefone(telefone) {
        const regexTelefone = /^\d{8,10}$/; // Telefone pode ter 8 ou 10 dígitos
        return regexTelefone.test(telefone);
    }

    validarCelular(celular) {
        const regexCelular = /^\d{9,11}$/; // Celular deve ter 11 dígitos
        return regexCelular.test(celular);
    }

    validarEmail(email) {
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Formato básico de email
        return regexEmail.test(email);
    }

    validarSenha(senha) {
        const regexSenha = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Pelo menos 8 caracteres, incluindo letras e números
        return regexSenha.test(senha);
    }

    validarCPF(cpf) {
        const regexCPF = /^\d{11}$/; // CPF deve ter 11 dígitos
        return regexCPF.test(cpf);
    }
}

class PessoaJuridica extends Cliente {
    constructor(nome, telefone, celular, email, senha, logradouro, numero, municipio, cidade, estado, cnpj, razaoSocial, inscricaoEstadual) {
        super(nome, telefone, celular, email, senha, logradouro, numero, municipio, cidade, estado, undefined, 'ativo', 'J'); // Chama o construtor da classe pai
        this.cnpj = cnpj; // CNPJ é exclusivo para Pessoa Jurídica
        this.razaoSocial = razaoSocial; // Razão social da empresa
        this.inscricaoEstadual = inscricaoEstadual; // Inscrição estadual da empresa
    }

    // Valida o CNPJ
    validarCNPJ() {
        const regexCNPJ = /^\d{14}$/; // CNPJ deve ter 14 dígitos
        return regexCNPJ.test(this.cnpj);
    }

    // Valida a razão social
    validarRazaoSocial() {
        return this.razaoSocial.length > 0; // A razão social deve ter pelo menos 1 caractere
    }

    // Valida a inscrição estadual
    validarInscricaoEstadual() {
        const regexInscricaoEstadual = /^[0-9]{1,12}$/; // Inscrição estadual pode ter até 12 dígitos
        return regexInscricaoEstadual.test(this.inscricaoEstadual);
    }

    // Método para validar todos os campos
    validarCampos() {
        if (!this.validarCNPJ()) {
            throw new Error('CNPJ inválido. Deve ter 14 dígitos.');
        }
        if (!this.validarRazaoSocial()) {
            throw new Error('Razão social inválida.');
        }
        if (!this.validarInscricaoEstadual()) {
            throw new Error('Inscrição estadual inválida. Deve conter apenas dígitos.');
        }
    }
}

module.exports = { Cliente, PessoaFisica, PessoaJuridica };
