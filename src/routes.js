const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/UserController');
const ItemController = require('./controllers/ItemController');

routes.get('/user', UserController.getAll)
routes.post('/user', UserController.create)
routes.delete('/user/:id', UserController.delete)
routes.put('/user/:id', UserController.update)

routes.get('/item', ItemController.getAll)
routes.post('/item', ItemController.create)
routes.delete('/item/:id', ItemController.delete)
routes.put('/item/:id', ItemController.update)

module.exports = routes;