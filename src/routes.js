const express = require('express');
const { userValidationRules, validate } = require('./middlewares/validator.js')
const routes = express.Router();

const UserController = require('./controllers/UserController');
const ModuleController = require('./controllers/ModuleController');
const PermissionController = require('./controllers/PermissionController');
const ProfileController = require('./controllers/ProfileController');

routes.get('/users', UserController.get)
routes.post('/users', userValidationRules(), validate, UserController.create)
routes.delete('/users/:id', UserController.remove)
routes.put('/users/:id', userValidationRules(), validate, UserController.update)

routes.get('/profiles', ProfileController.get)

routes.get('/modules', ModuleController.get)

routes.get('/permissions', PermissionController.get)

module.exports = routes;