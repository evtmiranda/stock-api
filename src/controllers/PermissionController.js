const permissionService = require('../services/permissionService')

module.exports = {
    async get(req, res) {
        try {
            let query = req.query;

            let permissions = await permissionService.findAndFilter(query);

            return res.json(permissions);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
}