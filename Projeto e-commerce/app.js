/*//fazer a importação do express
const express = require("express");

const router = require('./routes/index')

//configuração básica do aplicativo
const app = express();
app.use('/', router); //foi passado 1 rota pois criamos apenas 1
app.use(express.json());

module.exports = app; //exportamos o app, pois vamos importa-lo no servidor

router.get('/post/12', (req, res) => {
    res.send('');
})*/

const express = require('express');
const bodyParser = require('body-parser');
const clienteRoutes = require('./routes/clienteRoutes');

const app = express();
app.use(bodyParser.json()); // Para analisar JSON no corpo das requisições

app.use('/api', clienteRoutes); // Usa as rotas de cliente

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
