const express = require('express');
const WebGatewayController = require('../controllers/WebGatewayController');

const routes = express.Router();

routes.get('/getPermissions', WebGatewayController.getPermissions)
routes.get('/getProfilesAndPermissions', WebGatewayController.getProfilesAndPermissions)

module.exports = routes