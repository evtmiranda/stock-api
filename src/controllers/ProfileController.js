const profileService = require('../services/profileService')

module.exports = {
    async get(req, res) {
        try {
            const query = req.queryString;

            const profiles = await profileService.findAndFilter(query);

            return res.json(profiles);
        } catch (error) {
            return responseException(res, error);
        }
    },

    async create(req, res) {
        try {
            const { name, description, permissions } = req.body;

            const [profileCreated, created] = await profileService.create({
                name,
                description,
                permissions
            });

            if (created) {
                return res.status(201).json(profileCreated);
            }

            return res.status(422).json({
                errors: [
                    {
                        field: "Nome de perfil",
                        message: `Já existe um perfil com este nome: ${name}`
                    }]
            });
        } catch (error) {
            return responseException(res, error);
        }
    },

    async remove(req, res) {
        try {
            const id = req.params.id;
            const result = await profileService.remove(id);

            let response = { rowsDeleted: result.nModified }

            return res.status(200).json(response);
        } catch (error) {
            return responseException(res, error);
        }
    },

    async update(req, res) {
        try {
            const id = req.params.id;
            const { name, description, permissions } = req.body;

            const [numberOfAffectedRows, affectedRows] = await profileService.update({
                id,
                name,
                description,
                permissions
            });

            if (numberOfAffectedRows) {
                return res.status(201).json(affectedRows);
            }
            return res.status(422).json(`Não existe um perfil com este id: ${id}`)
        } catch (error) {
            return responseException(res, error);
        }

    }
}

const responseException = (res, error) => {
    return res.status(500).json({
        errors: [
            {
                message: "Oops, ocorreu algo inesperado."
            }]
    });
}