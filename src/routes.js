const express = require('express');
const routes = express.Router();

const HelloWorldController = require('./controllers/HelloWorldController');
const UserController = require('./controllers/UserController');

routes.get('/', HelloWorldController.index)
routes.get('/user', UserController.index)
routes.post('/user/store', UserController.store)

module.exports = routes;