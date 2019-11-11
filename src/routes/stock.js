const express = require('express');
const { stockValidationRules, validate } = require('../middlewares/validator.js')
const StockController = require('../controllers/StockController');

const routes = express.Router();

routes.get('/', StockController.get)
routes.post('/', stockValidationRules(), validate, StockController.post)
routes.delete('/:id', StockController.remove)
routes.put('/:id', StockController.update)
routes.get('/:status', StockController.getByStatus)

module.exports = routes