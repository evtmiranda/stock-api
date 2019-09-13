const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/UserController.js');

routes.get('/users', UserController.get)
routes.post('/users', UserController.create)
routes.delete('/users/:id', UserController.delete)
routes.put('/users/:id', UserController.update)

module.exports = routes;