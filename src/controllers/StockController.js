const stockService = require('../services/stockService')
const util = require('util')
const moment = require('moment')

module.exports = {
    async post(req, res) {
        try {
            const filters = {
                lot: req.body.lot,
                deleted_at: null
            }

            const currentStock = await stockService.findAndFilter(filters)

            if (currentStock.length > 0) {
                return res.status(422).json({
                    errors: [
                        {
                            field: "lote",
                            message: "Já existe um item cadastrado com este número de lote."
                        }]
                })
            }

            const stock = await stockService.create(req.body)

            return res.status(201).json(stock)
        } catch (error) {
            return responseException(res, error)
        }
    },

    async get(req, res) {
        try {
            const query = req.queryString;

            const stocks = await stockService.findAndFilter(query);

            return res.status(200).json(stocks);
        } catch (error) {
            return responseException(res, error)
        }
    },

    async getByStatus(req, res) {
        try {
            const status = req.params.status;

            const [stocks, metadata] = await stockService.getQuantityByStatus(status);

            let stock = stocks.filter(p => p.description === status);

            stock = stock[0]

            if (stock.length === 0) {
                stock = {
                    description: "estoque",
                    quantity: 0
                }
            }

            return res.status(200).json(stock)

        } catch (error) {
            return responseException(res, error)
        }
    },

    async getAllStatus(req, res) {
        try {
            const filters = req.params;

            const [stockStatuses, metaData] = await stockService.getQuantityByStatus(filters);

            return res.status(200).json(stockStatuses)
        } catch (error) {
            return responseException(res, error)
        }
    },

    async getQuantityByClient(req, res) {
        try {
            const filters = req.params;

            const stocks = await stockService.getQuantityByClient(filters);

            return res.status(200).json(stocks)
        } catch (error) {
            return responseException(res, error)
        }
    },

    async getEntryAndOutQuantityByDay(_req, res) {
        try {
            const stocks = await stockService.getEntryAndOutQuantityByDay();

            return res.status(200).json(stocks)
        } catch (error) {
            return responseException(res, error)
        }
    },

    async remove(req, res) {
        try {
            const id = req.params.id;
            const result = await stockService.remove(id);

            const response = { rowsDeleted: result.nModified }

            return res.status(200).json(response);
        } catch (error) {
            return responseException(res, error)
        }
    },

    async update(req, res) {
        try {
            const id = req.params.id;
            const { lot, description, reference, quantity, tag, store, unitValue, outputDate, outputQuantity, stockStatus } = req.body;

            if (outputQuantity > 0 && util.isNullOrUndefined(outputDate)) {
                return res.status(422).json({
                    errors: [
                        {
                            field: "Data de saída",
                            message: "O campo data de saída é obrigatório."
                        }]
                })
            }

            if (outputQuantity > quantity) {
                return res.status(422).json({
                    errors: [
                        {
                            field: "quantidade",
                            message: "A quantidade de saída não pode ser maior do que a de entrada."
                        }]
                })
            }

            const currentStock = await stockService.findAndFilter({ id })

            if (!util.isNullOrUndefined(outputDate)) {
                const entryDate = currentStock[0].entry.date;
                const outputDateDate = new Date(outputDate)
                const outputDateWithoutTime = new Date(outputDateDate.getYear(), outputDateDate.getMonth(), outputDateDate.getDate(), 0, 0, 0);
                const entryDateWithoutTime = new Date(entryDate.getYear(), entryDate.getMonth(), entryDate.getDate(), 0, 0, 0);

                if (outputDateWithoutTime < entryDateWithoutTime) {
                    return res.status(422).json({
                        errors: [
                            {
                                field: "quantidade",
                                message: `A data de saída não pode ser menor do que a de entrada (${moment(currentStock[0].entry.date).format('DD/MM/YYYY')}).`
                            }]
                    })
                }
            }

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

            return res.status(422).json({
                errors: [
                    {
                        field: "Id",
                        message: "Oops, ocorreu algo inesperado."
                    }]
            })
        } catch (error) {
            return responseException(res, error)
        }
    },
}

const responseException = (res, error) => {
    return res.status(500).json({
        errors: [
            {
                message: "Oops, ocorreu algo inesperado."
            }]
    })
}
