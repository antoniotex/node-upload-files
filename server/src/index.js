const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

const app = express()

const db = 'mongodb://tex:a12345@ds131902.mlab.com:31902/node-file-upload'

mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Conectado'))
  .catch(err => console.log(err))

// Para o Express conseguir lidar com requisições no formato JSON
app.use(express.json())

// Para o Express conseguir com requisições no padrão URL Enconded
app.use(express.urlencoded({ extended: true }))

// Lib de log no terminal
app.use(morgan('dev'))

app.use(require('./routes'))

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})