import User from '../models/User';

module.exports = {
    async getAll(_req, res) {
        const users = await User.find({ deleted: false }).sort('-createdAt');

        return res.json(users);
    },

    async create(req, res) {
        const { name, login, password, profileId } = req.body;

        const user = await User.findOrCreate({
            name,
            login,
            password,
            profileId
        });

        return res.status(201).json(user);
    },

    async update(req, res) {
        const id = req.params.id;
        const { name, login, password, profileId } = req.body;

        const user = await User.updateOne({ _id: id }, {
            name,
            login,
            password,
            profileId
        });

        let response = { rowsUpdated: user.nModified }

        return res.status(200).json(response);
    },

    async delete(req, res) {
        const id = req.params.id;
        const user = await User.deleteById(id);

        let response = { rowsDeleted: user.nModified }

        return res.status(200).json(response);
    }
}