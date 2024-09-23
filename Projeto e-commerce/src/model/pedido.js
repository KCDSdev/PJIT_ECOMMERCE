export class Pedido {
    constructor(clienteID, enderecoID, produtoID, pagamentoID, localEstoqueID, valorTotal, valorFrete, dataPedido) {
        this.id = null; // Pode ser atualizado com o valor do banco
        this.clienteID = clienteID;
        this.enderecoID = enderecoID;
        this.produtoID = produtoID;
        this.pagamentoID = pagamentoID;
        this.localEstoqueID = localEstoqueID;
        this.valorTotal = valorTotal;
        this.valorFrete = valorFrete;
        this.dataPedido = dataPedido || new Date(); // Define a data do pedido como a data atual, se não fornecida
    }

    // Método para definir o ID após a inserção
    setId(id) {
        this.id = id; // Atualiza o ID
    }

    // Getters
    getClienteID() {
        return this.clienteID;
    }

    getEnderecoID() {
        return this.enderecoID;
    }

    getProdutoID() {
        return this.produtoID;
    }

    getPagamentoID() {
        return this.pagamentoID;
    }

    getLocalEstoqueID() {
        return this.localEstoqueID;
    }

    getValorTotal() {
        return this.valorTotal;
    }

    getValorFrete() {
        return this.valorFrete;
    }

    getDataPedido() {
        return this.dataPedido;
    }

    toString() {
        return `Pedido {
            ID: ${this.id},
            Cliente ID: ${this.clienteID},
            Endereço ID: ${this.enderecoID},
            Produto ID: ${this.produtoID},
            Pagamento ID: ${this.pagamentoID},
            Local Estoque ID: ${this.localEstoqueID},
            Valor Total: ${this.valorTotal},
            Valor Frete: ${this.valorFrete},
            Data do Pedido: ${this.dataPedido}
        }`;
    }
}
