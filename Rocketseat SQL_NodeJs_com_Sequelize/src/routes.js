const express = require('express');

const routes = express.Router();

const UserController = require('./controllers/UserController');
const AdressController = require('./controllers/AdressController');

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.post('/users/:user_id/addresses', AdressController.store);

module.exports = routes;