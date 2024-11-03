// Importa o serviço de Cliente, onde está a lógica de negócios relacionada a clientes
const ClienteService = require('../Services/ClienteService');
const Cliente = require('../Model/ClienteModel'); // Importa o modelo Cliente

class ClienteController {
    // Método para listar todos os clientes
    static async listarClientes(req, res) {
        try {
            // Obtém a lista de clientes usando o serviço
            const clientes = await ClienteService.listarTodos();
            // Retorna a lista de clientes com status 200 (sucesso)
            res.status(200).json(clientes);
        } catch (error) {
            // Em caso de erro, retorna uma mensagem de erro e o status 500 (erro do servidor)
            res.status(500).json({ message: 'Erro ao listar clientes', error });
        }
    }

    // Método para buscar um cliente por email e senha
    static async autenticarCliente(req, res) {
        const { email, senha } = req.body; // O email e a senha devem ser enviados no corpo da requisição

        // Verifique se email e senha estão definidos e não são vazios
        if (!email || !senha) {
            return res.status(400).json({ message: 'Email e senha são obrigatórios.' });
        }

        try {
            // Chama o serviço para buscar o cliente
            const cliente = await ClienteService.buscarPorEmailESenha(email, senha);

            if (cliente) {
                return res.status(200).json(cliente); // Retorna o cliente encontrado
            } else {
                return res.status(404).json({ message: 'Cliente não encontrado ou senha inválida.' }); // Cliente não encontrado ou senha inválida
            }
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao buscar cliente.', error: error.message }); // Erro no servidor
        }
    }


    // Método para adicionar um novo cliente
    static async adicionarCliente(req, res) {
        try {
            // Extrai os dados do corpo da requisição (dados enviados via POST)
            const {
                ClienteNome, ClienteTelefone, ClienteCelular, ClienteEmail,
                ClienteSenha, ClienteLogradouro, ClienteNumero, ClienteMunicipio,
                ClienteCidade, ClienteEstado, ClienteSexo, ClienteCpf,
                ClienteDataNascimento, ClienteRg, ClienteNacionalidade, ClienteEstadoCivil
            } = req.body;

            console.log(ClienteNome);
           

            // Cria uma nova instância do modelo Cliente
            const novoCliente = new Cliente({
                ClienteNome,
                ClienteTelefone,
                ClienteCelular,
                ClienteEmail,
                ClienteSenha,
                ClienteLogradouro,
                ClienteNumero,
                ClienteMunicipio,
                ClienteCidade,
                ClienteEstado,
                ClienteSexo,
                ClienteCpf,
                ClienteDataNascimento,
                ClienteRg,
                ClienteNacionalidade,
                ClienteEstadoCivil,
                ClienteAtivo: true // Definido como ativo por padrão
            });

            console.log(novoCliente)

            // Adiciona o cliente usando o serviço
            const clienteCriado = await ClienteService.adicionar(novoCliente);

            // Retorna o cliente criado com status 201 (criado)
            res.status(201).json(clienteCriado);
        } catch (error) {
            // Em caso de erro, retorna uma mensagem de erro e o status 500 (erro do servidor)
            res.status(500).json({ message: 'Erro ao adicionar cliente', error });
        }
    }

    // Método para atualizar um cliente
    static async atualizarCliente(req, res) {
        const { id } = req.params; // O ID do cliente deve ser passado na URL
        const dadosAtualizados = req.body; // Os novos dados devem ser enviados no corpo da requisição

        try {
            // Cria uma nova instância do modelo Cliente com os dados atualizados
            const clienteAtualizado = new Cliente(dadosAtualizados);
            const resultado = await ClienteService.atualizarCliente(id, clienteAtualizado);

            if (resultado) {
                res.status(200).json({ message: 'Cliente atualizado com sucesso' });
            } else {
                res.status(404).json({ message: 'Cliente não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Erro ao atualizar cliente', error });
        }
    }

    //Método para apagar um cliente
    static async deletarCliente(req, res) {
        const { id } = req.params; // O ID do cliente deve ser passado

        try {
            // Chama o serviço para deletar o cliente
            const resultado = await ClienteService.deletarCliente(id);

            if (resultado) {
                return res.status(200).json({ message: "Cliente deletado com sucesso." });
            } else {
                return res.status(404).json({ message: "Cliente não encontrado." });
            }
        } catch (error) {
            return res.status(500).json({ message: "Erro ao deletar o cliente.", error: error.message });
        }
    }
}


module.exports = ClienteController;
