const reportService = require('../services/reportService')

module.exports = {

    async get(req, res) {
        try {
            const filters = req.query;
            const report = await reportService.getReport(filters);

            return res.json({
                "data": report
            });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    async getReport(req, res) {
        try {
            const filters = req.query;
            const report = await reportService.generateSpreadsheet(filters);

            return res.json({
                "data": report
            });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}