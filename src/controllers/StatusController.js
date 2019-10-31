const statusService = require('../services/statusService')

module.exports = {
    async post(req, res) {
        try {
            const { description } = req.body;

            const [statusCreated, created] = await statusService.findOrCreate({
                description
            });

            if (created) {
              return res.status(201).json(statusCreated);
            }
            return res.status(422).json(`Já existe um status com esta descrição: ${description}`)
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    },

    async get(req, res) {
        try {
            const query = req.queryString;

            const status = await statusService.findAndFilter(query);

            return res.status(200).json(status);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    async remove(req, res) {
        try {
            const id = req.params.id;
            const result = await statusService.remove(id);

            const response = { rowsDeleted: result.nModified }

            return res.status(200).json(response);
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    },

    // async update(req, res) {
    //     try {
    //         const id = req.params.id;
    //         const { lot, description, reference, quantity, tag, store, unitValue, outputDate, outputQuantity } = req.body;

    //         const [numberOfAffectedRows, affectedRows] = await stockService.update({
    //             lot,
    //             description,
    //             reference, 
    //             quantity, 
    //             tag, 
    //             store, 
    //             unitValue, 
    //             outputDate, 
    //             outputQuantity, 
    //         });

    //         if (numberOfAffectedRows){
    //             return res.status(200).json(affectedRows);
    //         }
    //         return res.status(422).json(`Não existe um estoque com este id: ${id}`)
    //     } catch (error) {
    //         return res.status(500).json({ error: error.message })
    //     }

    // },
}
