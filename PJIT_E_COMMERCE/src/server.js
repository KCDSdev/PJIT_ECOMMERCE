require('dotenv').config({ path: 'variaveis.env' });

const express = require('express');
const cors = require('cors'); //Permite usar recursos de dominios diferentes
const bodyParser = require('body-parser'); //Permite converter body para varios formatos
const routes = require('./routes');

const server = express();
server.use(cors());
server.use(bodyParser.json()); // Adicione esta linha
server.use(bodyParser.urlencoded({ extended: false }));
server.use('/api', routes);


server.listen(process.env.PORT || 5000, () => {
    console.log(`Server running...: http://localhost:${process.env.PORT || 5000}`);
});