const stockService = require('../services/stockService')

module.exports = {
    async post(req, res) {
        try {
            const stock = await stockService.create(req.body)

            return res.status(201).json(stock)
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    },

    async get(req, res) {
        try {
            const query = req.queryString;

            const stocks = await stockService.findAndFilter(query);

            return res.status(200).json(stocks);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    async getByStatus(req, res) {
        try {
            const status = req.params.status;

            const [stocks, metadata] = await stockService.getQuantityByStatus(status);

            let stock = stocks.filter(p => p.description === status);

            stock = stock[0]

            if(stock.length === 0){
                stock = {
                    description: "estoque",
                    quantity: 0
                }
            }

            return res.status(200).json(stock)

        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    async getAllStatus(req, res) {
        try {
            const filters = req.params;

            const [stockStatuses, metaData] = await stockService.getQuantityByStatus(filters);

            return res.status(200).json(stockStatuses)
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    async getQuantityByClient(req, res) {
        try {
            const filters = req.params;

            const stocks = await stockService.getQuantityByClient(filters);

            return res.status(200).json(stocks)
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    async getEntryAndOutQuantityByDay(_req, res) {
        try {
            const stocks = await stockService.getEntryAndOutQuantityByDay();

            return res.status(200).json(stocks)
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    async remove(req, res) {
        try {
            const id = req.params.id;
            const result = await stockService.remove(id);

            const response = { rowsDeleted: result.nModified }

            return res.status(200).json(response);
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    },

    async update(req, res) {
        try {
            const id = req.params.id;
            const { lot, description, reference, quantity, tag, store, unitValue, outputDate, outputQuantity, stockStatus } = req.body;

            const [numberOfAffectedRows, affectedRows] = await stockService.update({
                id,
                lot,
                description,
                reference,
                quantity,
                tag,
                store,
                unitValue,
                outputDate,
                outputQuantity,
                stockStatus
            });

            if (numberOfAffectedRows) {
                return res.status(200).json(affectedRows);
            }

            return res.status(422).json(`Não existe um estoque com este id: ${id}`)
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }

    },
}
