const express = require('express')
const morgan = require('morgan')

const app = express()

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