const express = require('express');
const { userValidationRules, stockValidationRules, validate } = require('./middlewares/validator.js')
const routes = express.Router();

const UserController = require('./controllers/UserController');
const ModuleController = require('./controllers/ModuleController');
const PermissionController = require('./controllers/PermissionController');
const ProfileController = require('./controllers/ProfileController');
const PermissionProfileController = require('./controllers/PermissionProfileController');
const WebGatewayController = require('./controllers/WebGatewayController');
const StockController = require('./controllers/StockController');
const ReportController = require('./controllers/ReportController');
const StatusController = require('./controllers/StatusController');

routes.get('/users', UserController.get)
routes.post('/users', userValidationRules(), validate, UserController.create)
routes.delete('/users/:id', UserController.remove)
routes.put('/users/:id', userValidationRules(), validate, UserController.update)

routes.get('/profiles', ProfileController.get)
routes.post('/profiles', ProfileController.create)
routes.delete('/profiles/:id', ProfileController.remove)
routes.put('/profiles/:id', ProfileController.update)

routes.get('/modules', ModuleController.get)

routes.get('/permissions', PermissionController.get)

routes.get('/permissionProfiles', PermissionProfileController.get)

routes.get('/web/getPermissions', WebGatewayController.getPermissions)
routes.get('/web/getProfilesAndPermissions', WebGatewayController.getProfilesAndPermissions)

routes.get('/stocks', StockController.get)
routes.get('/stocks/status', StockController.getAllStatus)
routes.get('/stocks/client', StockController.getQuantityByClient)
routes.get('/stocks/day', StockController.getEntryAndOutQuantityByDay)
routes.get('/stocks/:status', StockController.getByStatus)
routes.post('/stocks', stockValidationRules(), validate, StockController.post)
routes.delete('/stocks/:id', StockController.remove)
routes.put('/stocks/:id', StockController.update)

routes.get('/report', ReportController.get)
routes.get('/report/download', ReportController.getReport)

routes.get('/status', StatusController.get)
routes.post('/status', StatusController.post)
routes.put('/status/:id', StatusController.update)

module.exports = routes;