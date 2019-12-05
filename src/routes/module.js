const express = require('express');
const ModuleController = require('../controllers/ModuleController');

const routes = express.Router();

routes.get('/', ModuleController.get)

module.exports = routes