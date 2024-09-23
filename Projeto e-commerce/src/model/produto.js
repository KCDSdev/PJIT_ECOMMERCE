export class Produto {
    constructor(nome, descricao, marca, categoriaID, valor) {
        this.id = null; // Pode ser atualizado com o valor do banco
        this.nome = nome;
        this.descricao = descricao;
        this.marca = marca;
        this.categoriaID = categoriaID;
        this.valor = valor;
    }

    // Método para definir o ID após a inserção
    setId(id) {
        this.id = id; // Atualiza o ID
    }

    // Getters
    getNome() {
        return this.nome;
    }

    getDescricao() {
        return this.descricao;
    }

    getMarca() {
        return this.marca;
    }

    getCategoriaID() {
        return this.categoriaID;
    }

    getValor() {
        return this.valor;
    }

    toString() {
        return `Produto {
            ID: ${this.id},
            Nome: ${this.nome},
            Descrição: ${this.descricao},
            Marca: ${this.marca},
            Categoria ID: ${this.categoriaID},
            Valor: ${this.valor}
        }`;
    }

}

export class Categoria extends Produto {
    constructor(descricao) {
        super(null, descricao, null, null); // Chama o construtor da classe pai com valores nulos
        this.descricao = descricao; // Mantém a descrição
    }

    toString() {
        return `Categoria {
            ID: ${this.id},
            Descrição: ${this.descricao}
        }`;
    }
}
