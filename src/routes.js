const express = require('express');
const routes = express.Router();

const HelloWorldController = require('./controllers/HelloWorldController');
const UserController = require('./controllers/UserController');

routes.get('/', HelloWorldController.index)
routes.get('/user', UserController.getAll)
routes.post('/user', UserController.create)
routes.delete('/user/:id', UserController.delete)
routes.put('/user/:id', UserController.update)

module.exports = routes;