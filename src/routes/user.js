const express = require('express');
const UserController = require('../controllers/UserController');
const { userValidationRules, validate } = require('../middlewares/validator.js')

const routes = express.Router();

routes.get('/', UserController.get)
routes.post('/', userValidationRules(), validate, UserController.create)
routes.delete('/:id', UserController.remove)
routes.put('/:id', userValidationRules(), validate, UserController.update)

module.exports = routes