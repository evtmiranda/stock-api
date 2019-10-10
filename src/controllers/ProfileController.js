const profileService = require('../services/profileService')

module.exports = {
    async get(req, res) {
        try {
            const query = req.queryString;

            const profiles = await profileService.findAndFilter(query);

            return res.json(profiles);
        } catch (error) {
            return res.status(500).json({ error: error.message });
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
            
            return res.status(422).json(`Já existe um perfil com este nome: ${name}`)
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    },

    async remove(req, res) {
        try {
            const id = req.params.id;
            const result = await profileService.remove(id);

            let response = { rowsDeleted: result.nModified }

            return res.status(200).json(response);
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }
}