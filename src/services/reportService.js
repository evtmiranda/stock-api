const { Stock, Status, StockStatus } = require('../models')
const Serializer  = require('../serializer/stock')
const Sequelize = require('sequelize')
const moment = require('moment')
const Op = Sequelize.Op

const findAll = async () => {
    const today = new Date();
    const currentDay = today.getDate() - 1;
    const firstDay = new Date(today.getTime() + 24 * 60 * 60 * 1000 * - currentDay);

    const report = await Stock.findAll({
        attributes: [
            'created_at',
            [sequelize.fn('COUNT', sequelize.col('quantity')), 'qtd_entrada'],
            [sequelize.fn('COUNT', sequelize.col('output_quantity')), 'qtd_saida']
        ],
        where: {
            [Op.between]: [firstDay, today],
        }
    })

    return report;
}

const getReport = async (filters) => {
    const from = filters.from ? moment(filters.from).toDate() : '2019-01-01'
    const to = filters.to ? moment(filters.to).toDate() : moment().toDate()

    console.log(from)
    console.log(to)

    const betweenDates = {
        created_at: {
            [Op.between]: [from, to]
        }
    }

    if (filters.status) {
        var status = await Status.findOne({
            where: { description: filters.status }
        })

        if (!status) {
            return "Status invalido"
        }

        const stockStatuses = await StockStatus.findAll({
            where: {
                status_id: status.id
            },
            include: [
                {
                    model: Stock,
                    as: 'stocks',
                    where: betweenDates
                }
            ]
        })

        const stocks = stockStatuses.map((stockStatus) => { return stockStatus.stocks })
        const formatted = stocks.map((stock) => { return Serializer.serialize(stock) })

        return formatted
    }

    const stocks = await Stock.findAll({
        where: betweenDates,
    })

    return stocks.map((stock) => { return Serializer.serialize(stock) })
}

module.exports = {
    findAll,
    getReport
}
