const express = require('express');
const routes = require('./routes'); //Importando rotas
const { errors } = require('celebrate'); //Importando biblioteca de validações
const cors = require('cors'); //Controlar quem pode acessar nossa aplicação

const app = express();

app.use(cors());

app.use(express.json()); //Utilizar o formato Json para o corpo das requisições

app.use(routes);

app.use(errors());

module.exports = app;
