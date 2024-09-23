export class LocalEstoque {
    constructor(nome, endereco) {
        this.id = null; // Pode ser atualizado com o valor do banco
        this.nome = nome; // Nome do local de estoque
        this.endereco = endereco; // Endereço do local de estoque
    }

    setId(id) {
        this.id = id; // Atualiza o ID
    }

    getNome() {
        return this.nome;
    }

    getEndereco() {
        return this.endereco;
    }

    toString() {
        return `LocalEstoque {
            ID: ${this.id},
            Nome: ${this.nome},
            Endereço: ${this.endereco}
        }`;
    }
}
