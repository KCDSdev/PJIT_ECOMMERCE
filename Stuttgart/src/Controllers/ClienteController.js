// Importa o serviço de Cliente, onde está a lógica de negócios relacionada a clientes
const ClienteService = require('../Services/ClienteService');
const { PessoaFisica, PessoaJuridica } = require('../Model/ClienteModel'); // Importa os modelos

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

    //*------------------------------------------------------------------------------------------------------------------------- */

    // Método para adicionar um novo cliente (Pessoa Física ou Jurídica)
    static async adicionarCliente(req, res) {
        try {
            // Recebe os dados do corpo da requisição
            const {
                tipo,
                nome,
                sexo,
                cpf,
                telefone,
                celular,
                email,
                senha,
                logradouro,
                numero,
                municipio,
                cidade,
                estado,
                dataNascimento,
                rg,
                nacionalidade,
                estadoCivil,
                cnpj,
                razaoSocial,
                inscricaoEstadual
            } = req.body;

          

            let novoCliente;

            // Verifica o tipo de cliente (Pessoa Física ou Jurídica) e cria o modelo correspondente
            if (tipo === 'F') {
                novoCliente = new PessoaFisica(
                    nome, telefone, celular, email, senha, logradouro, numero, municipio, cidade, estado, sexo, cpf, dataNascimento, rg, nacionalidade, estadoCivil
                );
            } else if (tipo === 'J') {
                novoCliente = new PessoaJuridica(
                    nome, telefone, celular, email, senha, logradouro, numero, municipio, cidade, estado,
                    cnpj, razaoSocial, inscricaoEstadual
                );
            } else {
                return res.status(400).json({ message: 'Tipo de cliente inválido.' });
            }



            // Valida os dados do cliente
            novoCliente.validarCampos();

            // Chama o serviço para adicionar o cliente
            const clienteCriado = await ClienteService.adicionar(novoCliente);

            // Retorna o sucesso
            return res.status(201).json({
                message: "Cliente adicionado com sucesso!",
                data: clienteCriado
            });
        } catch (error) {
            // Em caso de erro, retorna uma resposta apropriada
            return res.status(400).json({
                message: "Erro ao adicionar cliente",
                error: error.message
            });
        }
    }

    //*------------------------------------------------------------------------------------------------------------------------- */

    // Método para editar um cliente existente
    static async editarCliente(req, res) {
        // Obtém o ID do cliente dos parâmetros da URL
        const { id } = req.params;

        try {
            // Recebe os dados do corpo da requisição
            const {
                tipo,
                nome,
                sexo,
                cpf,
                telefone,
                celular,
                email,
                senha,
                logradouro,
                numero,
                municipio,
                cidade,
                estado,
                dataNascimento,
                rg,
                nacionalidade,
                estadoCivil,
                cnpj,
                razaoSocial,
                inscricaoEstadual
            } = req.body;

          

            let novoCliente;

            // Verifica o tipo de cliente (Pessoa Física ou Jurídica) e cria o modelo correspondente
            if (tipo === 'F') {
                novoCliente = new PessoaFisica(
                    nome, telefone, celular, email, senha, logradouro, numero, municipio, cidade, estado, sexo, cpf, dataNascimento, rg, nacionalidade, estadoCivil
                );
            } else if (tipo === 'J') {
                novoCliente = new PessoaJuridica(
                    nome, telefone, celular, email, senha, logradouro, numero, municipio, cidade, estado,
                    cnpj, razaoSocial, inscricaoEstadual
                );
            } else {
                return res.status(400).json({ message: 'Tipo de cliente inválido.' });
            }

            console.log(novoCliente)

            // Valida os dados do cliente
            novoCliente.validarCampos();

            // Chama o serviço para atualizar os dados do cliente
            //const resultado = await ClienteService.editar(id, novoCliente);
            
            // Verifica se o cliente foi atualizado
            if (resultado) {
                res.status(200).json({ message: 'Cliente atualizado com sucesso', cliente: resultado });
            } else {
                res.status(404).json({ message: 'Cliente não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Erro ao atualizar cliente', error: error.message });
        }
    }
}

module.exports = ClienteController;
