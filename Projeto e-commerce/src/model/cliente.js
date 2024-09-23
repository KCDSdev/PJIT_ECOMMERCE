export class Cliente {
    constructor(nome, sexo, cpf, telefone, celular, email, senha, enderecoId) {
        // Atributos que serão inseridos automaticamente pelo banco
        this.id = null; // Pode ser atualizado com o valor do banco
        this.dataCriacao = null; // Pode ser atualizado com o valor do banco

        // Atributos fornecidos pelo usuário
        this.nome = nome;
        this.sexo = sexo;
        this.cpf = cpf;
        this.telefone = telefone;
        this.celular = celular;
        this.email = email;
        this.senha = senha;
        this.enderecoId = enderecoId;
    }

    // Getters e Setters

    // ID
    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    // Nome
    get nome() {
        return this._nome;
    }

    set nome(value) {
        this._nome = value;
    }

    // Sexo
    get sexo() {
        return this._sexo;
    }

    set sexo(value) {
        this._sexo = value;
    }

    // CPF
    get cpf() {
        return this._cpf;
    }

    set cpf(value) {
        this._cpf = value;
    }

    // Telefone
    get telefone() {
        return this._telefone;
    }

    set telefone(value) {
        this._telefone = value;
    }

    // Celular
    get celular() {
        return this._celular;
    }

    set celular(value) {
        this._celular = value;
    }

    // Email
    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    // Senha
    get senha() {
        return this._senha;
    }

    set senha(value) {
        this._senha = value;
    }

    // EnderecoId
    get enderecoId() {
        return this._enderecoId;
    }

    set enderecoId(value) {
        this._enderecoId = value;
    }

    // Data de Criação
    get dataCriacao() {
        return this._dataCriacao;
    }

    set dataCriacao(value) {
        this._dataCriacao = value;
    }

    // Método para definir ID e data de criação após inserção no banco
    setDadosBanco(id, dataCriacao) {
        this._id = 1;
        this._dataCriacao = new Date();
    }

    toString() {
        return `Cliente {
            ID: ${this.id},
            Nome: ${this.nome},
            Sexo: ${this.sexo},
            CPF: ${this.cpf},
            Telefone: ${this.telefone},
            Celular: ${this.celular},
            Email: ${this.email},
            Endereco ID: ${this.enderecoId},
            Data de Criação: ${this.dataCriacao}
        }`;


    }

    testaCPF(cpf) {
        // Remove caracteres não numéricos
        cpf = cpf.replace(/[^\d]/g, '');

        // Verifica se o CPF tem 11 dígitos ou é uma sequência repetida
        if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
            return false;
        }

        // Validação do primeiro dígito verificador
        let soma = 0;
        for (let i = 0; i < 9; i++) {
            soma += parseInt(cpf.charAt(i)) * (10 - i);
        }

        let digitoVerificador1 = 11 - (soma % 11);
        digitoVerificador1 = digitoVerificador1 > 9 ? 0 : digitoVerificador1;

        if (digitoVerificador1 !== parseInt(cpf.charAt(9))) {
            return false;
        }

        // Validação do segundo dígito verificador
        soma = 0;
        for (let i = 0; i < 10; i++) {
            soma += parseInt(cpf.charAt(i)) * (11 - i);
        }

        let digitoVerificador2 = 11 - (soma % 11);
        digitoVerificador2 = digitoVerificador2 > 9 ? 0 : digitoVerificador2;

        if (digitoVerificador2 !== parseInt(cpf.charAt(10))) {
            return false;
        }

        return true;
    }

    validarTelefone(telefone) {
        // Remove espaços, parênteses e hífens
        telefone = telefone.replace(/[\s()-]/g, '');
      
        // Expressão regular para verificar formatos válidos:
        // - DDD opcional: (11) ou 11
        // - Número de 8 ou 9 dígitos, começando com 9 apenas para celulares
        // - Aceita números com e sem hífen ou espaços
        const regex = /^(?:\(?\d{2}\)?\s?)?(?:9\d{4}|\d{4})\d{4}$/;
      
        return regex.test(telefone);
    }

    validarEmail(email) {
        // Expressão regular para validar o formato do email
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
        return regex.test(email);
    }


}