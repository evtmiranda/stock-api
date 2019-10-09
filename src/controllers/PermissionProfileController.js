const permissionProfileService = require('../services/permissionProfileService')

module.exports = {
    async get(req, res) {
        try {
            const query = req.queryString;

            const permissionProfiles = await permissionProfileService.findAndFilter(query);

            return res.json(permissionProfiles);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
}