import User from '../models/User';

module.exports = {
    async index(_req, res) {
        const users = User.find().sort('-createdAt');

        return res.json(users);
    },

    async store(req, res) {
        const { name, login, password, profile_id } = req.body;

        const user = User.create({
            name,
            login,
            password,
            profile_id
        });

        return res.json(user);
    }
}