const knex = require('knex');
const configuration = require('../../knexfile');

const config = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development;

//Conexão com o banco de dados
const connection = knex(config);
//Exportando a connexão com o banco de dados
module.exports = connection;

