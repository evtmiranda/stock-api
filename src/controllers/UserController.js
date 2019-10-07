const userService = require('../services/userService')

module.exports = {
    async get(req, res) {
        try {
            const query = req.queryString;

            const users = await userService.findAndFilter(query);

            return res.json(users);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    async create(req, res) {
        try {
            const { name, username, password, profile_id } = req.body;

            const [userCreated, created] = await userService.findOrCreate({
                name,
                username,
                password,
                profile_id
            });

            if (created) {
              return res.status(201).json(userCreated);
            }
            return res.status(422).json(`Já existe um usuário com este username: ${username}`)
        } catch (error) {
            return res.status(500).json({ error: error.message })
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

    async remove(req, res) {
        try {
            const id = req.params.id;
            const result = await userService.remove(id);

            let response = { rowsDeleted: result.nModified }

            return res.status(200).json(response);
        } catch (error) {
            return res.status(500).json({ error: "Ops! Something went wrong." })
        }

    }
}