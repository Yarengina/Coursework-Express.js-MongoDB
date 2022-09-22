const Book = require('../models/book')

const getBooks = async (req, res, next) => {
    Book.find({})
        .then((books) => {
            res.status(200).send(books)
        })
        .catch((err) => next(err))
}

const getBook = async (req, res, next) => {
    const { id } = req.params
    Book.findById(id)
        .then((book) => {
            res.status(200).send(book)
        })
        .catch((err) => next(err))
}

const createBook = async (req, res, next) => {
    const data = req.body
    Book.create(data)
        .then((book) => {
            res.status(201).send(book)
        })
        .catch((err) => next(err))
}

const updateBook = async (req, res, next) => {
    const { id } = req.params
    Book.findByIdAndUpdate(id, { ...req.body })
        .then(() => {
            Book.findById(id).then((book) => res.status(200).send(book))
        })
        .catch((err) => next(err))
}

const deleteBook = async (req, res, next) => {
    const { id } = req.params
    Book.findByIdAndDelete(id)
        .then((book) => {
            res.status(200).send('book was deleted')
        })
        .catch((err) => next(err))
}

module.exports = {
    createBook,
    getBooks,
    getBook,
    updateBook,
    deleteBook,
}
