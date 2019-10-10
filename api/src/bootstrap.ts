/**
 * Bootstrap file
 *
 * We initialize express here, set configurations (e.g. parsers) & declare endpoints.
 * This way, routes and default configurations are abstracted so that it can
 * be re-used somewhere else in the app.
 */
import * as express from 'express'
import * as bodyParser from 'body-parser'
import appRoutes from './routes/app'
import projectRoutes from './routes/projects'

// Create webserver
const app = express()

// Register parsers
app.use(bodyParser.json())

// Load route files
app.use('/', appRoutes)
app.use('/projects', projectRoutes)

export default app