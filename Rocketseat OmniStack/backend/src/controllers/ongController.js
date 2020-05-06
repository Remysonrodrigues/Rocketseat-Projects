const GenerateUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/connection') //Importando a conexão com o banco de dados

module.exports = {

    async index(request, response){
        const ongs = await connection('ongs').select('*');
        return response.json(ongs);
    },

    async create(request, response){
        const {name, email, whatsapp, city, uf} = request.body; 
        const id = GenerateUniqueId(); //Vai gerar 4 bytes de caracteres aleatorio
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        });
        return response.json({id}); 
    }
}