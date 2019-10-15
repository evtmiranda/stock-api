const stockService = require('../services/stockService')

module.exports = {
    async get(req, res) {
        try {
            const query = req.queryString;

            const stocks = await stockService.findAndFilter(query);

            return res.json(stocks);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
}