const loggerMiddleware = require('./logger')
const corsMiddleware = require('./cors')

const middlewares = [corsMiddleware, loggerMiddleware]

module.exports = middlewares
