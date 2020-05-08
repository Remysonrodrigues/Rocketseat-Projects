const User = require('../models/User');
const Address = require('../models/Addresses');

module.exports = {
    async index(req, res) {
        const { user_id } = req.params;
        const { zipcode, street, number } = req.body;
        const addresses = await Address.findAll();
        return res.json(addresses)
    },
    async store(req, res) {
        const { user_id } = req.params;
        const { zipcode, street, number } = req.body;
        const user = await User.findByPk(user_id);
        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }
        const address = await Address.create({ user_id, zipcode, street, number });
        return res.json(address);
    }
};