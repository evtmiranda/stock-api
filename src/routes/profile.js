const express = require('express');
const ProfileController = require('../controllers/ProfileController');

const routes = express.Router();

routes.get('/', ProfileController.get)
routes.post('/', ProfileController.create)
routes.delete('/:id', ProfileController.remove)
routes.put('/:id', ProfileController.update)

module.exports = routes