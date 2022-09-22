const router = require('express').Router()
const userRouter = require('./users')
const bookRouter = require('./books')

router.get('/', (req, res) => {
    res.status(200)
    res.send('Hello, world!')
})

router.use('/users', userRouter)
router.use('/books', bookRouter)

module.exports = router
