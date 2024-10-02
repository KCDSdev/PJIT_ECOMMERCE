class Pagamento {
    constructor(id, formaPagamento, banco, numeroParcelas, valorTotal) {
        this.id = id;                      // INT, chave primária
        this.formaPagamento = formaPagamento; // VARCHAR(50), NOT NULL (Ex: "Cartão de Crédito", "Boleto")
        this.banco = banco;                // VARCHAR(50) (Ex: "Banco X", "Banco Y")
        this.numeroParcelas = numeroParcelas; // INT, número de parcelas se aplicável
        this.valorTotal = valorTotal;      // DECIMAL(10, 2), NOT NULL
    }
}
