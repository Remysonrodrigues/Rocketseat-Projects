const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate'); //Importando biblioteca de validações

const OngController = require('./controllers/ongController'); //Importando as rotas ongController
const IncidentController = require('./controllers/incidentController'); //Importando as rotas incidentController
const ProfileController = require('./controllers/profileController'); //Importando as rotas profileController
const SessionController = require('./controllers/sessionController'); //Importando as rotas sessionController

const routes = express.Router();

// Rota para realizar login
routes.post('/sessions', SessionController.create);

// Rota para listar ongs
routes.get('/ongs', OngController.index);
// Rota para cadastrar uma ong
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}), OngController.create);

// Rota para listar casos especificos
routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}), ProfileController.index);

// Rota para listar casos
routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}), IncidentController.index);
// Rota para crias casos
routes.post('/incidents', IncidentController.create);
// Rota para deletar um caso
routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), IncidentController.delete);

//Exportando rotas
module.exports = routes;