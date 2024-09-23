export class FormaPagamento {
    constructor(formaPagamento, banco, nroParcelas) {
        this.id = null; // Pode ser atualizado com o valor do banco
        this.formaPagamento = formaPagamento;
        this.banco = banco;
        this.nroParcelas = nroParcelas;
    }

    // Método para definir o ID após a inserção
    setId(id) {
        this.id = id; // Atualiza o ID
    }

    // Getters
    getFormaPagamento() {
        return this.formaPagamento;
    }

    getBanco() {
        return this.banco;
    }

    getNroParcelas() {
        return this.nroParcelas;
    }

    toString() {
        return `FormaPagamento {
            ID: ${this.id},
            Forma de Pagamento: ${this.formaPagamento},
            Banco: ${this.banco},
            Número de Parcelas: ${this.nroParcelas}
        }`;
    }
}
