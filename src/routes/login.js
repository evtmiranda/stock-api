const express = require('express');
const LoginController = require('../controllers/LoginController');

const routes = express.Router();

routes.post('/', LoginController.login)

module.exports = routes