import { Cliente } from '/src/model/cliente.js';
import { Endereco } from '/src/model/endereco.js';
import { Pedido } from '/src/model/pedido.js';
import { FormaPagamento } from '/src/model/formaPagamento.js';
import { Produto } from '/src/model/produto.js';
import { Categoria } from '/src/model/produto.js';
import { Estoque } from '/src/model/estoque.js';
import { LocalEstoque } from '/src/model/localEstoque.js';


const p1 = new Cliente(
    'João Silva',
    'M',
    '12345678901',
    '123456789',
    '11987654321',
    'joao.silva@email.com',
    'senhaSegura123',
    101
);

const meuEndereco = new Endereco(
    "Rua das Flores",
    123,
    "São Paulo",
    "São Paulo",
    "SP"
);

const meuPedido = new Pedido(
    1,
    1,
    1,
    1,
    1,
    150.00,
    10.00
);

const minhaFormaPagamento = new FormaPagamento(
    "Cartão de Crédito",
    "Banco do Brasil",
    3
);

const meuProduto = new Produto(
    "Camiseta",
    "Camiseta de algodão",
    "Marca X",
    1,
    49.90
);

const categoriaProduto = new Categoria(
    "Casual"
);

const meuEstoque = new Estoque(
    1,
    1,
    100,
    500.00
);

const meuLocalEstoque = new LocalEstoque(
    "Armazém Central",
    "Rua Exemplo",
    123
);



/*console.log(p1.toString());
console.log(meuEndereco.toString());
console.log(meuPedido.toString());
console.log(minhaFormaPagamento.toString());
console.log(meuProduto.toString())
console.log(categoriaProduto.toString());
console.log(meuEstoque.toString());
console.log(meuLocalEstoque.toString());*/


const repositorio = {
    p1,
    meuEndereco,
    meuPedido,
    minhaFormaPagamento,
    minhaFormaPagamento,
    meuProduto,
    categoriaProduto,
    meuEstoque,
    meuLocalEstoque
};

console.log(p1.validarEmail("klebercaetano19@outlook.com"));


