const routes = require('express').Router()
const multer = require('multer')
const multerConfig = require('./config/multer')

routes.get('/', (req, res) => {
    return res.json({ hello: 'Dev' })
})

routes.post('/posts', multer().single('file'), (req, res) => {
    return res.json({ hello: 'Dev' })
})

module.exports = routes