const ClienteService = require('../Services/ClienteService');

module.exports =
{
    inserir: async (req, res) => {
        let json = { error: '', result: {} };

        // Desestruturação de campos enviados no body da requisição
        let { telefone, celular, email, senha, endereco, tipo } = req.body;
        console.log('Dados recebidos:', { telefone, celular, email, senha, endereco, tipo });

        // Verificação se todos os campos obrigatórios foram enviados
        if (telefone && celular && email && senha && endereco && tipo) {
            try {
                // Chama o método inserir do ClienteService e obtém o código do cliente inserido
                let ClienteCodigo = await ClienteService.inserir(telefone, celular, email, senha, endereco, tipo);
                
                // Prepara o resultado, sem incluir 'data_Criacao' e 'codigo', que são gerados pelo banco
                json.result = {
                    ClienteCodigo,
                    telefone,
                    celular,
                    email,
                    endereco,
                    tipo
                };
            } catch (error) {
                json.error = 'Erro ao inserir cliente: ' + error.message;
            }
        } else {
            json.error = 'Campos não enviados';
        }

        // Retorna o JSON com o resultado ou o erro
        res.json(json);
    }
}