export class Estoque {
    constructor(localEstoqueID, produtoID, quantidade, valor) {
        this.id = null; // Pode ser atualizado com o valor do banco
        this.localEstoqueID = localEstoqueID;
        this.produtoID = produtoID;
        this.quantidade = quantidade;
        this.valor = valor;
    }

    setId(id) {
        this.id = id; // Atualiza o ID
    }

    getLocalEstoqueID() {
        return this.localEstoqueID;
    }

    getProdutoID() {
        return this.produtoID;
    }

    getQuantidade() {
        return this.quantidade;
    }

    getValor() {
        return this.valor;
    }

    toString() {
        return `Estoque {
            ID: ${this.id},
            Local Estoque ID: ${this.localEstoqueID},
            Produto ID: ${this.produtoID},
            Quantidade: ${this.quantidade},
            Valor: ${this.valor}
        }`;
    }
}
