const { Stock, StockStatus, Status } = require('../models')
const Serializer = require('../serializer/stock')
const Sequelize = require('sequelize')
const constants = require('../../config/constants')
const config = require('../../config/database')
const database = config[constants.environment]
const sequelize = new Sequelize(database)

const create = async (params) => {
    params.entryDate = params.entry.date

    const stock = await Stock.create(params)

    const stockStatus = {
        stockId: stock.id,
        statusId: params.stockStatus.status.id,
        createdAt: new Date()
    }

    await StockStatus.create(stockStatus)

    return stock
}

const findAndFilter = async (filters) => {
    const stocks = await Stock.findAll({
        where: filters,
        include: [
            {
                model: StockStatus,
                as: 'stockStatus',
                include: [{
                    model: Status,
                    as: 'status',
                }],
            }
        ],
        order: [['created_at', 'desc']]
    })



    return stocks.map((stock) => { return Serializer.serialize(stock) })
}

const getByFilters = async (filters) => {
    if (filters) {
        var status = await Status.findOne({
            where: { description: filters }
        })

        if (!status) {
            return "Status invalido"
        }

        const stockStatuses = await StockStatus.findAll({
            where: {
                status_id: status.id
            }
        })
        return stockStatuses
    }
}

const getQuantityByStatus = async (filters) => {
    const stockStatuses = sequelize.query(
    `SELECT status.description,
     COUNT(*) AS quantity 
     FROM stocks AS s 
     INNER JOIN stock_status AS ss ON s.id = ss.stock_id 
     INNER JOIN status ON status.id = ss.status_id 
     GROUP BY status.description`
    )

   return stockStatuses
}

const remove =  async (id) => {
    const result = await Stock.update({
        deletedAt: new Date()
    },
        {
            where: {
                id: id
            }
        })

    return result;
}

const update = async (stock) => {
    const [numberOfAffectedRows, affectedRows] = await Stock.update({
        lot: stock.lot,
        description: stock.description,
        refenrece: stock.reference,
        quantity: stock.quantity,
        tag: stock.tag,
        store: stock.store,
        unitValue: stock.unitValue,
        outputDate: stock.outputDate,
        outputQuantity: stock.outputQuantity,
        updatedAt: new Date()
    },
        {
            where: { id: stock.id },
            returning: true
        })

    const stockStatus = {
        statusId: stock.stockStatus.status.id
    }

    await StockStatus.update(stockStatus,
        {
            where: {
                stockId: stock.id
            }
        })

    return [numberOfAffectedRows, affectedRows];
}


module.exports = {
    findAndFilter,
    getByFilters,
    getQuantityByStatus,
    remove,
    update,
    create,
};
