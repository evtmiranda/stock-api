const express = require('express');
const { createUserValidationRules, validate } = require('./utils/validator.js')
const routes = express.Router();

const UserController = require('./controllers/UserController');
const ModuleController = require('./controllers/ModuleController');
const PermissionController = require('./controllers/PermissionController');
const ProfileController = require('./controllers/ProfileController');

routes.get('/users', UserController.get)
routes.post('/users', createUserValidationRules(), validate, UserController.create)
routes.delete('/users/:id', UserController.remove)
routes.put('/users/:id', UserController.update)

routes.get('/profiles', ProfileController.get)

routes.get('/modules', ModuleController.get)

routes.get('/permissions', PermissionController.get)

module.exports = routes;