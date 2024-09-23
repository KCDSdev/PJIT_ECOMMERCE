export class Endereco {
    constructor(logradouro, numero, municipio, cidade, estado) {
        this.id = null; // Pode ser atualizado com o valor do banco
        this.logradouro = logradouro;
        this.numero = numero;
        this.municipio = municipio;
        this.cidade = cidade;
        this.estado = estado;
    }

    // Getters
    getId() {
        return this.id;
    }

    getLogradouro() {
        return this.logradouro;
    }

    getNumero() {
        return this.numero;
    }

    getMunicipio() {
        return this.municipio;
    }

    getCidade() {
        return this.cidade;
    }

    getEstado() {
        return this.estado;
    }

    // Setters
    setId(id) {
        this.id = id;
    }

    setLogradouro(logradouro) {
        this.logradouro = logradouro;
    }

    setNumero(numero) {
        this.numero = numero;
    }

    setMunicipio(municipio) {
        this.municipio = municipio;
    }

    setCidade(cidade) {
        this.cidade = cidade;
    }

    setEstado(estado) {
        this.estado = estado;
    }

    toString() {
        return `Endereco {
            ID: ${this.id},
            Logradouro: ${this.logradouro},
            Número: ${this.numero},
            Município: ${this.municipio},
            Cidade: ${this.cidade},
            Estado: ${this.estado}
        }`;
    }
}
