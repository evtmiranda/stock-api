const { Stock, Status, StockStatus } = require('../models')
const Serializer  = require('../serializer/stock')
const Sequelize = require('sequelize')
const moment = require('moment')
const fs = require('fs')
const Op = Sequelize.Op
const s3 = require('../clients/s3')

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

const getByFilters = async(filters) => {
    const from = filters.from ? moment(filters.from).toDate() : '2019-01-01'
    const to = filters.to ? moment(filters.to).toDate() : moment().toDate()

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
        return stocks
    }

    const stocks = await Stock.findAll({
        where: betweenDates,
    })

    return stocks
}

const getReport = async (filters) => {
    const stocks = await getByFilters(filters)

    return stocks.map((stock) => { return Serializer.serialize(stock) }) 
}

const generateSpreadsheet = async (filters) => {
    const stocks = await getByFilters(filters)

    const headers = Object.keys(stocks[0].dataValues).join(',') + '\n'
    const body = stocks.map((stock) => { return Object.values(stock.dataValues).join(',').slice(0, -1) + '\n' })
    const csv = headers + body.join('')

    const filename = "report" + Date.now() + ".csv"
    const path = "/tmp/" + filename

    await fs.writeFile(path, csv, function (error) { console.log(error) })

    const s3FileParams = s3.buildUploadParams(path, filename)
    const client = s3.build()

    const uploader = await client.uploadFile(s3FileParams)
    const s3Path = await s3.getPublicUrlHttp(filename)

    return {"path": s3Path}
}

module.exports = {
    findAll,
    getReport,
    generateSpreadsheet
}
