const express = require('express');
const PermissionController = require('../controllers/PermissionController');

const routes = express.Router();

routes.get('/', PermissionController.get)

module.exports = routes