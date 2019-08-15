import { Router } from 'express'
import { index } from './controllers/HelloWorldController'
const routes = Router()

routes.get('/', index)

export default routes