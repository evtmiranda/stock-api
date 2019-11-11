const express = require('express');
const PermissionProfileController = require('../controllers/PermissionProfileController');

const routes = express.Router();

routes.get('/', PermissionProfileController.get)

module.exports = routes