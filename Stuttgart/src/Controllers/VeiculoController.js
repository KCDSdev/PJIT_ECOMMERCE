// Importa o serviço de Veículo, onde está a lógica de negócios relacionada a veículos
const VeiculoService = require('../Services/VeiculoService');
const VeiculoModel = require('../Model/VeiculoModel'); // Importa o modelo de Veículo


class VeiculoController {
    // Método para listar todos os veículos
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

    // Método para adicionar um novo veículo
    static async adicionarVeiculo(req, res) {
        // Desestrutura os dados do veículo enviados pelo cliente
        const { modelo, fabricante, ano_fabricacao, ano_modelo, placa, valor, cor, potencia, tamanho_do_aro, estado_registro, quilometragem } = req.body;

        // Verifica se todos os campos obrigatórios estão presentes
        if (!modelo || !fabricante || !ano_fabricacao || !ano_modelo || !placa || !valor || !cor || !potencia || !tamanho_do_aro || !estado_registro || quilometragem === undefined) {
            return res.status(400).json({ message: "Todos os campos são obrigatórios" });
        }

        try {
            // Cria uma nova instância do modelo VeiculoModel com os parâmetros
            const novoVeiculo = new VeiculoModel(
                modelo,
                fabricante,
                ano_fabricacao,
                ano_modelo,
                placa,
                valor,
                cor,
                potencia,
                tamanho_do_aro,
                estado_registro,
                quilometragem
            );

            // Chama o serviço para adicionar um novo veículo
            const veiculoAdicionado = await VeiculoService.adicionar(novoVeiculo);
            // Retorna uma resposta com status 201 (criado) e os detalhes do novo veículo
            res.status(201).json({ message: 'Veículo adicionado com sucesso', veiculo: veiculoAdicionado });
        } catch (error) {
            // Em caso de erro, retorna uma mensagem de erro e o status 500
            res.status(500).json({ message: 'Erro ao adicionar veículo', error });
        }
    }

    // Método para editar um veículo existente
    static async editarVeiculo(req, res) {
        // Obtém o ID do veículo dos parâmetros da URL
        const { id } = req.params;

        // Desestrutura os dados do veículo enviados pelo cliente
        const { modelo, fabricante, ano_fabricacao, ano_modelo, placa, valor, cor, potencia, tamanho_do_aro, estado_registro, quilometragem } = req.body;

        try {
            // Cria uma nova instância do modelo VeiculoModel com os parâmetros
            const veiculoAtualizado = new VeiculoModel(
                modelo,
                fabricante,
                ano_fabricacao,
                ano_modelo,
                placa,
                valor,
                cor,
                potencia,
                tamanho_do_aro,
                estado_registro,
                quilometragem
            );

            // Chama o serviço para atualizar os dados do veículo
            const resultado = await VeiculoService.editar(id, veiculoAtualizado);
            
            // Verifica se o veículo foi atualizado
            if (resultado) {
                res.status(200).json({ message: 'Veículo atualizado com sucesso', veiculo: resultado });
            } else {
                res.status(404).json({ message: 'Veículo não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Erro ao atualizar veículo', error });
        }
    }

    // Método para remover um veículo existente
    static async removerVeiculo(req, res) {
        // Obtém o ID do veículo dos parâmetros da URL
        const { id } = req.params;

        try {
            // Chama o serviço para remover o veículo
            const veiculoRemovido = await VeiculoService.remover(id);

            // Verifica se o veículo foi removido
            if (veiculoRemovido) {
                res.status(200).json({ message: 'Veículo removido com sucesso' });
            } else {
                res.status(404).json({ message: 'Veículo não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Erro ao remover veículo', error });
        }
    }
}

// Exporta o controller para ser utilizado nas rotas
module.exports = VeiculoController;
