const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/UserController');
const ItemController = require('./controllers/ItemController');

routes.get('/users', UserController.get)
routes.post('/users', UserController.create)
routes.delete('/users/:id', UserController.delete)
routes.put('/users/:id', UserController.update)

routes.get('/items', ItemController.getAll)
routes.post('/items', ItemController.create)
routes.delete('/items/:id', ItemController.delete)
routes.put('/items/:id', ItemController.update)

module.exports = routes;