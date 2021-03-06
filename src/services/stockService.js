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

const getQuantityByStatus = async () => {
    const stockStatuses = sequelize.query(
        `SELECT status.description,
            COUNT(*) AS quantity 
        FROM stocks AS s 
        INNER JOIN stock_status AS ss ON s.id = ss.stock_id 
        INNER JOIN status ON status.id = ss.status_id
        WHERE s.deleted_at IS NULL 
        GROUP BY status.description`
    )

    return stockStatuses
}

const getQuantityByClient = async () => {
    const query = `SELECT
                        store,
                        COUNT(*) AS quantity 
                    FROM stocks
                    WHERE deleted_at IS NULL
                    AND TO_CHAR(created_at, 'yyyy-mm') = TO_CHAR(current_date, 'yyyy-mm')
                    GROUP BY
                        store`

    const stocks = sequelize.query(query, { type: sequelize.QueryTypes.SELECT })

    return stocks
}

const getEntryAndOutQuantityByDay = async () => {
    const query = `WITH entry AS(
                        SELECT
                            TO_CHAR(entry_date, 'yyyy-mm-dd') AS entry_date,
                            SUM(quantity) AS entry_quantity
                        FROM stocks
                        WHERE deleted_at IS NULL
                        GROUP BY
                            1
                    ), output AS(
                        SELECT
                            TO_CHAR(output_date, 'yyyy-mm-dd') AS output_date,
                            SUM(output_quantity) AS output_quantity
                        FROM stocks
                        WHERE deleted_at IS NULL
                        GROUP BY
                            1
                    )
                    SELECT
                        TO_CHAR(dd.date, 'dd') AS day,
                        COALESCE(e.entry_quantity, 0) AS "entryQuantity",
                        COALESCE(o.output_quantity, 0) AS "outputQuantity"
                    FROM dim_date AS dd
                    LEFT JOIN entry AS e
                    ON dd.date = DATE(e.entry_date)
                    LEFT JOIN output AS o
                    ON dd.date = DATE(o.output_date)
                    WHERE TO_CHAR(DATE(e.entry_date), 'yyyy-mm') = TO_CHAR(current_date, 'yyyy-mm')
                    OR TO_CHAR(DATE(o.output_date), 'yyyy-mm') = TO_CHAR(current_date, 'yyyy-mm')
                    ORDER BY 
                        1`

    const stocks = sequelize.query(query, { type: sequelize.QueryTypes.SELECT })

    return stocks
}

const remove = async (id) => {
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
        reference: stock.reference,
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
    getQuantityByStatus,
    getQuantityByClient,
    getEntryAndOutQuantityByDay,
    remove,
    update,
    create,
};
