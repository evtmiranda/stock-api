const userService = require('../services/moduleService')

module.exports = {
    async get(req, res) {
        try {
            let query = req.query;

            let modules = await moduleService.findAndFilter(query);

            return res.json(modules);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
}