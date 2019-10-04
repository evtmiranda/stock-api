const profileService = require('../services/profileService')

module.exports = {
    async get(req, res) {
        try {
            let query = req.query;

            let users = await profileService.findAndFilter(query);

            profiles = profiles.sort((a, b) => {
                return b.createdAt - a.createdAt
            });

            return res.json(users);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}