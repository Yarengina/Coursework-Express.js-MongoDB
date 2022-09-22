const User = require('../models/user')

const getUsers = async (req, res, next) => {
    User.find({})
        .then((users) => {
            res.status(200).send(users)
        })
        .catch((err) => next(err))
}

const getUser = async (req, res, next) => {
    const { id } = req.params
    User.findById(id)
        .then((user) => {
            res.status(200).send(user)
        })
        .catch((err) => next(err))
}

const createUser = async (req, res, next) => {
    const data = req.body
    User.create(data)
        .then((user) => {
            res.status(201).send(user)
        })
        .catch((err) => next(err))
}

const updateUser = async (req, res, next) => {
    const { id } = req.params
    User.findByIdAndUpdate(id, { ...req.body })
        .then(() => {
            User.findById(id).then((user) => res.status(200).send(user))
        })
        .catch((err) => next(err))
}

const deleteUser = async (req, res, next) => {
    const { id } = req.params
    User.findByIdAndDelete(id)
        .then((user) => {
            res.status(200).send('book was deleted')
        })
        .catch((err) => next(err))
}

module.exports = {
    createUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser,
}
