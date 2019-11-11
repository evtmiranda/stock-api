const express = require('express');
const ReportController = require('../controllers/ReportController');

const routes = express.Router();

routes.get('/', ReportController.get)
routes.get('/download', ReportController.getReport)

module.exports = routes