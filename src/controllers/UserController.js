const userService = require('../services/UserService')
const { convertQueryParameterToJsonObject } = require('../modules')

module.exports = {
    async get(req, res) {
        try {
            let query = req.query;

            let users = await userService.findAndFilter(query);

            users = users.sort((a, b) => {
                return b.createdAt - a.createdAt
            });

            return res.json(users);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    async create(req, res) {
        try {
            const { name, username, password, profileId } = req.body;

            const user = await User.findOrCreate({
                name,
                username,
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
            const { name, username, password, profileId } = req.body;

            const user = await User.updateOne({ _id: id }, {
                name,
                username,
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