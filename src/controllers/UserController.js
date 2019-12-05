const userService = require('../services/userService')

module.exports = {
    async get(req, res) {
        try {
            const query = req.queryString;

            const users = await userService.findAndFilter(query);

            return res.json(users);
        } catch (error) {
            return responseException(res, error)
        }
    },

    async create(req, res) {
        try {
            const { name, username, password, profileId } = req.body;

            const [userCreated, created] = await userService.findOrCreate({
                name,
                username,
                password,
                profileId
            });

            if (created) {
                return res.status(201).json(userCreated);
            }

            return res.status(422).json({
                errors: [
                    {
                        field: "Nome de usuário",
                        message: `Já existe um usuário com este username: ${username}`
                    }]
            })
        } catch (error) {
            return responseException(res, error)
        }
    },

    async update(req, res) {
        try {
            const id = req.params.id;
            const { name, username, password, profileId } = req.body;

            const [numberOfAffectedRows, affectedRows] = await userService.update({
                id,
                name,
                username,
                password,
                profileId
            });

            if (numberOfAffectedRows) {
                return res.status(201).json(affectedRows);
            }

            return res.status(422).json({
                errors: [
                    {
                        field: "Id",
                        message: "Oops, ocorreu algo inesperado."
                    }]
            })
        } catch (error) {
            return responseException(res, error)
        }
    },

    async remove(req, res) {
        try {
            const id = req.params.id;
            const result = await userService.remove(id);

            let response = { rowsDeleted: result.nModified }

            return res.status(200).json(response);
        } catch (error) {
            return responseException(res, error)
        }
    }
}

const responseException = (res, error) => {
    return res.status(500).json({
        errors: [
            {
                field: "",
                message: "Oops, ocorreu algo inesperado."
            }]
    })
}