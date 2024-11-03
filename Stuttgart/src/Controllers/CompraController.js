const CompraService = require('../Services/CompraService.JS');

class CompraController {
    static async criarCompra(req, res) {
        const { clienteId, veiculoId, valorTotal, dataCompra, tipoPagamento } = req.body;

        try {
            const compraId = await CompraService.criarCompra({ clienteId, veiculoId, valorTotal, dataCompra, tipoPagamento });
            res.status(201).json({ message: 'Compra e pagamento registrados com sucesso', compraId });
        } catch (error) {
            res.status(500).json({ message: 'Erro ao registrar a compra e pagamento', error: error.message });
        }
    }
}

module.exports = CompraController;
