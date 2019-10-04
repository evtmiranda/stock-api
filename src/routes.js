const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/UserController');
const ModuleController = require('./controllers/ModuleController');
const PermissionController = require('./controllers/PermissionController');

//USER
routes.get('/users', UserController.get)
routes.post('/users', UserController.create)
routes.delete('/users/:id', UserController.remove)
routes.put('/users/:id', UserController.update)

//MODULE
routes.get('/modules', ModuleController.get)

//PERMISSION
routes.get('/permissions', PermissionController.get)

module.exports = routes;