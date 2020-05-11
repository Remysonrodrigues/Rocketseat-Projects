const { Op } = require('sequelize');
const User = require('../models/User');

module.exports = {
    async show() {
        //Encontra todos os usuário que tem email que termina com @rocketseat.com.br
        //Desses usuários eu quero buscar todos que moram na rua "Rua Guilherme Gembala"
        //Desses usuários eu quero buscar as tecnologias que começam com React
        const users = await User.findAll({
            attributes: ['name', email],
            where: { 
                email: { [Op.iLike]: '%@rocketseat.com.br' }
             },
             include: [
                 { association: 'addresses', where: { street: 'Rua Guilherme Gembala' } }, //Endereços
                 { association: 'techs', required: false, where: { name: { [Op.iLike]: 'React%' } } } //Tecnologias
             ]
        });
    }
};