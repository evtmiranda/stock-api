const permissionService = require('../services/permissionService')

module.exports = {
    async get(req, res) {
        try {
            const query = req.queryString;

            const permissions = await permissionService.findAndFilter(query);

            return res.json(permissions);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
}