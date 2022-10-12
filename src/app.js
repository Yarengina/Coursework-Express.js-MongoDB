const express = require('express')
const dotenv = require('dotenv')
const routes = require('./routes')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const middlewares = require('./middlewares/middlewares')

require('./db/mongodb')

dotenv.config()
const { PORT = 3005, MONGODB_URL } = process.env

mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true,
})

const app = express()

app.use(middlewares)
app.use(bodyParser.json())
app.use('/', routes)

app.use((err, req, res, next) => {
    const isNotFound = err.message.indexOf('not found')
    const isCastError = err.message.indexOf('Cast to ObjectId failed')
    if (err.message && (isNotFound || isCastError)) {
        return next()
    }
    res.status(500).json({ error: err.stack })
})

app.use((req, res) => {
    res.sendStatus(404)
})

app.listen(PORT, () => {
    console.log(`Server has started on http://localhost:${PORT}/`)
})
