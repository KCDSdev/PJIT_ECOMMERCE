// Importa o serviço de Veículo, onde está a lógica de negócios relacionada a veículos
const VeiculoService = require('../Services/VeiculoService');
const VeiculoModel = require('../Model/VeiculoModel'); // Importa o modelo de Veículo


class VeiculoController {

    // Método para listar todos os veículos
    // Chama o serviço para buscar todos os veículos e retorna em formato JSON
    static async listarVeiculos(req, res) {
        try {
            // Obtém a lista de veículos usando o serviço
            const veiculos = await VeiculoService.listarTodos();
            // Retorna a lista de veículos com status 200 (sucesso)
            res.status(200).json(veiculos);
        } catch (error) {
            // Em caso de erro, retorna uma mensagem de erro e o status 500 (erro do servidor)
            res.status(500).json({ message: 'Erro ao listar veículos', error });
        }
    }

    static async adicionarVeiculo(req, res) {
        // Desestrutura os dados do veículo enviados pelo cliente
        const { modelo, fabricante, ano_fabricacao, ano_modelo, placa, valor, cor, potencia, tamanho_do_aro, estado_registro, quilometragem } = req.body;
    
        // Verifica se todos os campos obrigatórios estão presentes
        if (!modelo || !fabricante || !ano_fabricacao || !ano_modelo || !placa || !valor || !cor || !potencia || !tamanho_do_aro || !estado_registro || !quilometragem) {
            return res.status(400).json({ message: "Todos os campos são obrigatórios" });
        }

        const veiculo = new VeiculoModel(modelo, fabricante, ano_fabricacao, ano_modelo, placa, valor, cor, potencia, tamanho_do_aro, estado_registro, quilometragem);
    

        try {
            // Chama o serviço para adicionar um novo veículo
            const novoVeiculo = await VeiculoService.adicionar(veiculo);
            // Retorna uma resposta com status 201 (criado) e os detalhes do novo veículo
            res.status(201).json({ message: 'Veículo adicionado com sucesso', veiculo: novoVeiculo });
        } catch (error) {
            // Em caso de erro, retorna uma mensagem de erro e o status 500
            res.status(500).json({ message: 'Erro ao adicionar veículo', error });
        }
    }


}

// Exporta o controller para ser utilizado nas rotas
module.exports = VeiculoController;
