const express = require('express');
const StatusController = require('../controllers/StatusController');

const routes = express.Router();

routes.get('/', StatusController.get)
routes.post('/', StatusController.post)
routes.put('/:id', StatusController.update)

module.exports = routes