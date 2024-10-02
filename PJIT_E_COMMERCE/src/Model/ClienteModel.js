class Cliente {
    constructor(nome, tipo, telefone, celular, email, senha, endereco) {
        this.nome = nome;
        this.tipo = tipo; // 'F' para Pessoa Física, 'J' para Pessoa Jurídica
        this.telefone = telefone;
        this.celular = celular;
        this.email = email;
        this.senha = senha;
        this.endereco = endereco;

        // Validação dos campos
        this.validarCampos();
    }

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
    }

    validarTelefone(telefone) {
        const regexTelefone = /^\d{10}$/; // 10 dígitos (ex: 3147896543)
        return regexTelefone.test(telefone);
    }

    validarCelular(celular) {
        const regexCelular = /^\d{11}$/; // 11 dígitos (ex: 31912345678)
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
}

class PessoaFisica extends Cliente {
    constructor(nome, telefone, celular, email, senha, endereco, cpf) {
        super(nome, 'F', telefone, celular, email, senha, endereco);
        this.cpf = cpf; // CPF é exclusivo para Pessoa Física
    }
}

class PessoaJuridica extends Cliente {
    constructor(nome, telefone, celular, email, senha, endereco, cnpj) {
        super(nome, 'J', telefone, celular, email, senha, endereco);
        this.cnpj = cnpj; // CNPJ é exclusivo para Pessoa Jurídica
    }
}

module.exports = { Cliente, PessoaFisica, PessoaJuridica };
