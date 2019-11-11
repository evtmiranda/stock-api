const express = require('express');
const routes = express.Router();

const webRoutes = require('./routes/web')
const loginRoutes = require('./routes/login')
const userRoutes = require('./routes/user')
const stockRoutes = require('./routes/stock')
const reportRoutes = require('./routes/report')
const statusRoutes = require('./routes/status')
const moduleRoutes = require('./routes/module')
const profileRoutes = require('./routes/profile')
const permissionRoutes = require('./routes/permission')
const permissionProfileRoutes = require('./routes/permissionProfile')

const PermissionMiddleware = require('./middlewares/permissions')
routes.use('/', PermissionMiddleware.userHasPermission)

routes.use('/modules', moduleRoutes)
routes.use('/permissions', permissionRoutes)
routes.use('/permissionProfiles', permissionProfileRoutes)
routes.use('/profiles', profileRoutes)
routes.use('/report', reportRoutes)
routes.use('/status', statusRoutes)
routes.use('/stocks', stockRoutes)
routes.use('/users', userRoutes)
routes.use('/web', webRoutes)
routes.use('/login', loginRoutes)

module.exports = routes;
