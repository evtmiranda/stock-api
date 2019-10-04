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
    }
}