class Compra {
    constructor(id, clienteId, veiculoId, pagamentoId, dataCompra, valorTotal, statusCompra) {
        this.id = id;                      // INT, chave primária
        this.clienteId = clienteId;        // INT, chave estrangeira para o cliente
        this.veiculoId = veiculoId;        // INT, chave estrangeira para o veículo
        this.pagamentoId = pagamentoId;    // INT, chave estrangeira para o pagamento
        this.dataCompra = dataCompra;      // DATETIME, NOT NULL, padrão CURRENT_TIMESTAMP
        this.valorTotal = valorTotal;      // DECIMAL(10, 2), NOT NULL
        this.statusCompra = statusCompra;  // VARCHAR(20), (Ex: "Em Processamento", "Concluída")
    }
}
