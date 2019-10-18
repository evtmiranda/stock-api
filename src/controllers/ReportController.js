const reportService = require('../services/reportService')

module.exports = {
    async get(_req, res) {
        try {
            const report = await reportService.findAll();

            return res.json(report);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
}