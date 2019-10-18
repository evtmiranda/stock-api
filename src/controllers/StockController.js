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
            const { lot, description, reference, quantity, tag, store, unitValue, outputDate, outputQuantity } = req.body;

            const [numberOfAffectedRows, affectedRows] = await stockService.update({
                lot,
                description,
                reference, 
                quantity, 
                tag, 
                store, 
                unitValue, 
                outputDate, 
                outputQuantity, 
            });

            if (numberOfAffectedRows){
                return res.status(201).json(affectedRows);
            }
            return res.status(422).json(`Não existe um estoque com este id: ${id}`)
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }

    },
}