const User = require('../models/User');

module.exports = {
    async get(req, res) {
        try {
            let query = req.query;
            let queryParams = {};
            let protectedKeys = ['password'];

            let users = await User.findAndFilter(query, queryParams, protectedKeys);

            users = users.sort((a, b) => {
                return b.createdAt - a.createdAt
            });

            return res.json(users);
        } catch (error) {
            return res.status(500).json({ error: "Ops! Something went wrong." });
        }
    },

    async create(req, res) {
        try {
            const { name, login, password, profileId } = req.body;

            const user = await User.findOrCreate({
                name,
                login,
                password,
                profileId
            });

            return res.status(201).json(user);
        } catch (error) {
            return res.status(500).json({ error: "Ops! Something went wrong." })
        }
    },

    async update(req, res) {
        try {
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
        } catch (error) {
            return res.status(500).json({ error: "Ops! Something went wrong." })
        }

    },

    async delete(req, res) {
        try {
            const id = req.params.id;
            const user = await User.deleteById(id);

            let response = { rowsDeleted: user.nModified }

            return res.status(200).json(response);
        } catch (error) {
            return res.status(500).json({ error: "Ops! Something went wrong." })
        }

    }
}