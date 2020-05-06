const crypto = require('crypto'); //Para gerar um id aleatorio

module.exports = function generateUniqueId(){
    return crypto.randomBytes(4).toString('HEX');
}