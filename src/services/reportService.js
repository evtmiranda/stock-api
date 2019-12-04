const { Stock, Status, StockStatus } = require('../models')
const Serializer = require('../serializer/stock')
const Sequelize = require('sequelize')
const moment = require('moment')
const fs = require('fs')
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
            deleted_at: null
        }
    })

    return report;
}

const getByFilters = async (filters) => {
    const from = filters.from ? moment(filters.from).toDate() : '2019-01-01'
    const to = filters.to ? moment(filters.to).toDate() : moment().toDate()

    let queryFilters = {
        created_at: {
            [Op.between]: [from, to]
        },
        deleted_at: null
    }

    if (filters.store) {
        queryFilters = {
            created_at: {
                [Op.between]: [from, to]
            },
            $col: Sequelize.where(Sequelize.fn('lower', Sequelize.col('store')), Sequelize.fn('lower', filters.store)),
            deleted_at: null
        }
    }

    let statusFilter = {}

    if (filters.status) {
        var status = await Status.findOne({
            where: { description: filters.status }
        })

        if (!status) {
            return { error: "Status invalido" }
        }

        statusFilter = {
            id: status.id
        }
    }

    const stocks = await Stock.findAll({
        where: queryFilters,
        include: [
            {
                model: StockStatus,
                as: 'stockStatus',
                include: [{
                    model: Status,
                    as: 'status',
                    where: statusFilter
                }],
            }
        ],
        order: [['created_at', 'desc']]
    })

    return stocks.filter(p => p.stockStatus !== null)
}

const getReport = async (filters) => {
    const stocks = await getByFilters(filters)

    if (stocks.error) {
        return stocks
    }

    return stocks.map((stock) => { return Serializer.serialize(stock) })
}

const generateSpreadsheet = async (filters) => {
    const stocks = await getByFilters(filters)

    const headers = Object.keys(stocks[0].dataValues).join(',') + '\n'
    const body = stocks.map((stock) => { return Object.values(stock.dataValues).join(',') })
    const csv = headers + body

    const path = "/tmp/report-" + Date.now() + ".csv"

    fs.writeFile(path, csv, function (error) { console.log(error) })

    return { "path": path }
}

module.exports = {
    findAll,
    getReport,
    generateSpreadsheet
}
